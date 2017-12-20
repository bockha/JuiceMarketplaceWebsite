const self = {};

self.Empty = {
    type: 'object',
    properties: {},
    additionalProperties: false
};

self.IUNO_Callback_Query = {
    type: 'object',
    properties: {
        code: {
            type: 'string',
            pattern: '^[a-z0-9]{40}$'
        }
    },
    required: ['code'],
    additionalProperties: false
};

module.exports = self;