
function ProgramConverter (program) {
    this.convert = function() {
        var sequences = {};
        var phasesToProcess = {};
        
        // copy sequences
        program.sequences.forEach(function(sequence) {
            var copySequence = jQuery.extend(true, {}, sequence);
            sequences[copySequence.id] = copySequence
            console.log("Copied sequence: "+copySequence);
        });

        while (true) {
            // calculate phasesToProcess
            phasesToProcess = {};
            for (var key in sequences) {
                var sequence = sequences[key];
                if (sequence.phases.length > 0) {
                    var phase = sequence.phases[0];
                    if (phase.start == 0) {
                        phasesToProcess[key] = phase;
                        sequence.phases.shift();
                    }
                }
            }

            var phaseCount = Object.keys(phasesToProcess).length;
            if (phaseCount == 0) {
                break;
            }

            // calculate max throughput
            var maxThroughput = 0;
            for (var key in phasesToProcess) {
                var phase = phasesToProcess[key];
                maxThroughput = Math.max(phase.throughput);
            }

            // calculate targetMode
            var targetMode = 1;
            if (maxThroughput < 100) {
                targetMode = 2;
            }

            var multiplier = 1;
            if (maxThroughput != 0) {
                multiplier = 100 / maxThroughput;
            }

            // move start of remaining phases by multiplier
            for (var key in sequences) {
                var sequence = sequences[key];
                sequence.phases.forEach(function(phase) {
                    phase.start /= multiplier;
                })
            }
            
            // calculate end of current run
            // calculate end of phases
            var end = 0;
            for (var key in phasesToProcess) {
                var phase = phasesToProcess[key];
                var phaseEnd = phase.getEnd();
                end = Math.max(end, phaseEnd);
            }
            console.log("natural end = " + end);

            // cut end with start of remaining phases
            for (var key in sequences) {
                var sequence = sequences[key];
                if (sequence.phases.length > 0) {
                    var phase = sequence.phases[0];
                    end = Math.min(end, phase.start);
                }
            }
            console.log("cuted end = " + end);

            // cut phases
            for (var key in phasesToProcess) {
                var sequence = sequences[key];
                var phase = phasesToProcess[key];
                var amount = Math.min(phase.milliliter, end);
                if (targetMode == 2) {
                    var effectiveThroughput = phase.throughput * multiplier;
                    amount = end * effectiveThroughput / 100;
                }
                var remainingAmount = phase.milliliter - amount;
                if (remainingAmount > 0) {
                    var remainingPhase = new Phase(end, remainingAmount, phase.throughput);
                    // fixme: this is ugly
                    remainingPhase.sequence = sequence;
                    sequence.phases = [remainingPhase].concat(sequence.phases);
                }
                phase.milliliter = Math.min(phase.milliliter, amount);
            }

            // move remaining phases by end
            for (var key in sequences) {
                var sequence = sequences[key];
                sequence.phases.forEach(function(phase) {
                    phase.start -= end;
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
                    sequence.phases.forEach(function(phase) {
                        phase.start -= pause;
                    })
                }
            } else {
                pause = 0;
            }
            
            // setup line
            var pauseMs = convertMilliliterToMilliseconds(pause);
            console.log("line timing = "+targetMode+", sleep = "+pauseMs);
            for (var key in phasesToProcess) {
                var sequence = sequences[key];
                var ingredient = sequence.ingredient.name;
                var phase = phasesToProcess[key];
                console.log(" - ingredient = "+ingredient+", amount = "+phase.milliliter);
                var phaseEnd = phase.getEnd();
                end = Math.max(end, phaseEnd);
            }
        }
    }

    /**
     * Selects the target mode by checking the throughput of each phase.
     * If all phases have 100% throughput, the targetMode is 1 (all begin as fast as possible).
     * If at least one phase has a lower throughput, the targetMode is 2 (all begin and try to end together).
     * @param {array} sequences Array of sequences
     * @return {int} targetMode (1 or 2)
     */
    this.getTargetMode = function(sequences) {
        var targetMode = 1;
        sequences.forEach(function(sequence) {
            var phase = sequence.phases[0];
            if (phase.throughput != 100) {
                targetMode = 2;
            }
        })
        return targetMode;
    }

    /**
     * Selects all sequences which first phase starts at 0.
     * @return {array} Array with sequences.
     */
    this.selectInvoledSequences = function() {
        var currentSequences = [];
        this.remainingSequences.forEach(function(sequence) {
            if (sequence.phases.length > 0) {
                if (sequence.phases[0].start == 0) {
                    currentSequences.push(sequence);
                }
            }
        })
        return currentSequences;
    }
}