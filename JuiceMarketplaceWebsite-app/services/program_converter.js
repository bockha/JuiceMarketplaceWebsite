var self = {};

self.convert = function (program) {
    var sequences = {};
    // copy sequences
    program.sequences.forEach(function (sequence) {
        var copySequence = jQuery.extend(true, {}, sequence);
        sequences[copySequence.id] = copySequence
        console.log("Copied sequence: " + copySequence);
    });

    var phasesAvailable = true;
    while (phasesAvailable) {
        console.log("");
        console.log(" ############################## new run ##############################");
        // calculate phasesToProcess
        var phasesToProcess = {};
        console.log(" # Phases to process: ")
        for (var key in sequences) {
            var sequence = sequences[key];
            if (sequence.phases.length > 0) {
                var phase = sequence.phases[0];
                if (phase.start == 0) {
                    phasesToProcess[key] = phase;
                    console.log("   - id = '" + phase.id + ", start = " + phase.start + ", amount = " + phase.milliliter + ", throughput = " + phase.throughput);
                    sequence.phases.shift();
                }
            }
        }

        // log remaining phases
        console.log(" # Remaining phases: ")
        for (var key in sequences) {
            var sequence = sequences[key];
            sequence.phases.forEach(function (phase) {
                console.log("   - id = '" + phase.id + ", start = " + phase.start + ", amount = " + phase.milliliter + ", throughput = " + phase.throughput);
            });
        }
        var phaseCount = Object.keys(phasesToProcess).length;
        if (phaseCount == 0) {
            break;
        }

        // calculate min/max throughput
        var maxThroughput = -1;
        var minThroughput = -1;
        for (var key in phasesToProcess) {
            var phase = phasesToProcess[key];
            if (maxThroughput == -1) {
                maxThroughput = phase.throughput;
                minThroughput = phase.throughput;
            } else {
                maxThroughput = Math.max(maxThroughput, phase.throughput);
                minThroughput = Math.min(minThroughput, phase.throughput);
            }
        }

        // calculate targetMode
        var targetMode = 1;
//            if (minThroughput < 100) {
        if (minThroughput != maxThroughput) {
            targetMode = 2;
        }

        console.log("targetMode = " + targetMode + ", minThroughput = " + minThroughput + ", maxThroughput = " + maxThroughput);

        // calculate end of current run
        // calculate end of phases
        var end = -1;
        for (var key in phasesToProcess) {
            var phase = phasesToProcess[key];
            var effectiveThroughput = phase.throughput * 100 / maxThroughput;
            console.log(" - phase = " + phase.id + ", throughput = " + phase.throughput + ", effectiveThroughput = " + effectiveThroughput);
            var phaseEnd = phase.start + phase.milliliter * 100 / effectiveThroughput;
            if (targetMode == 1 || end == -1) {
                end = Math.max(end, phaseEnd);
            }
            if (targetMode == 2) {
                end = Math.min(end, phaseEnd);
            }
        }
        if (end == -1) { // this should not happen
            end = 0;
        }
        console.log("natural end = " + end);

        // cut end with start of remaining phases
        var endDidChange = true;
        while (endDidChange) {
            endDidChange = false;
            var offset = end;// * 100 / maxThroughput - end;
            for (var key in sequences) {
                var sequence = sequences[key];
                if (sequence.phases.length > 0) {
                    var phase = sequence.phases[0];
//                        var start = phase.start - offset;
                    var start = phase.start * maxThroughput / 100;
                    if (start < end) {
                        console.log("end " + end + " -> " + start + " by phase " + phase.id + ", phase.start = " + phase.start + ", offset = " + offset);
                        end = start;
                        endDidChange = true;
                        break;
                    }
                }
            }
        }
        console.log("cuted end = " + end);

        // cut phases
        var offset = end * 100 / maxThroughput;
        for (var key in phasesToProcess) {
            var sequence = sequences[key];
            var phase = phasesToProcess[key];
            var amount = Math.min(phase.milliliter, end);
            if (targetMode == 2) {
                var effectiveThroughput = phase.throughput * 100 / maxThroughput;
                amount = end * effectiveThroughput / 100;
            }
            var remainingAmount = phase.milliliter - amount;
            console.log("phase = " + phase.id + ", amount = " + phase.milliliter + ", cutting = " + amount + ", remaining = " + remainingAmount);
            if (remainingAmount > 0) {
//                    var remainingPhase = new Phase(end, remainingAmount, phase.throughput);
                var remainingPhase = new Phase(offset, remainingAmount, phase.throughput);
                // fixme: this is ugly
                remainingPhase.sequence = sequence;
                sequence.phases = [remainingPhase].concat(sequence.phases);
            }
            phase.milliliter = Math.min(phase.milliliter, amount);
        }

        // move remaining phases by end
        console.log("moving offset = " + offset);
        for (var key in sequences) {
            var sequence = sequences[key];
            sequence.phases.forEach(function (phase) {
                console.log("finally moving phase " + phase.id + " with start " + phase.start + " to " + (phase.start - offset));
                phase.start -= offset;
            })
        }

        // handle pauses
        var pause = -1;
        for (var key in sequences) {
            var sequence = sequences[key];
            if (sequence.phases.length > 0) {
                var phase = sequence.phases[0];
                if (pause == -1) {
                    pause = phase.start;
                } else {
                    pause = Math.min(pause, phase.start);
                }
            }
        }

        // move remaining phases by pause
        if (pause > 0) {
            for (var key in sequences) {
                var sequence = sequences[key];
                sequence.phases.forEach(function (phase) {
                    console.log("moving phase by pause " + phase.id + " with start " + phase.start + " to " + (phase.start - pause));
                    phase.start -= pause;
                })
            }
        } else {
            pause = 0;
        }

        // setup line
        var pauseMs = convertMilliliterToMilliseconds(pause);
        console.log("line timing = " + targetMode + ", sleep = " + pauseMs);
        for (var key in phasesToProcess) {
            var sequence = sequences[key];
            var ingredient = sequence.ingredient.name;
            var phase = phasesToProcess[key];
            console.log(" - ingredient = " + ingredient + ", amount = " + phase.milliliter);
            var phaseEnd = phase.getEnd();
            end = Math.max(end, phaseEnd);
        }

        // check if phases available
        phasesAvailable = false;
        for (var key in sequences) {
            var sequence = sequences[key];
            if (sequence.phases.length > 0) {
                phasesAvailable = true;
                break;
            }
        }
    }
}


module.exports = self;