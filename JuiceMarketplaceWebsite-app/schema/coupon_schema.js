const self = {};

self.Empty = {
    type: 'object',
    properties: {},
    additionalProperties: false
};

self.Coupon_Body = {
    type: 'object',
    properties: {
        'g-recaptcha-response': {
            type: 'string',
            format: 'uuid'
        }
    },
    required: ['g-recaptcha-response'],
    additionalProperties: false
};

self.Faucet_Query = {
    type: 'object',
    properties: {
        id: {
            type: 'string',
        }
    },
    required: [],
    additionalProperties: false
};

module.exports = self;