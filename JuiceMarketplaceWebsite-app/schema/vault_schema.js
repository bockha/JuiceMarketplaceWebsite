/**
 * Created by beuttlerma on 09.02.17.
 */

const self = {};

self.Empty = {
    type: 'object',
    properties: {},
    additionalProperties: false
};

self.Payout_Body = {
    type: 'object',
    properties: {
        payoutId: {
            type: 'string',
            format: 'uuid'
        },
        payoutAddress: {
            type: 'string',
            pattern: '^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$'
        },
        amount: {
            type: 'integer',
            minimum: 1
        },
        emptyWallet: {
            type: 'boolean'
        },
        referenceId: {
            type: 'string',
            minLength: 1,
            maxLength: 250
        }
    },
    required: [ 'payoutAddress', 'amount' , 'emptyWallet'],
    additionalProperties: false
};

module.exports = self;