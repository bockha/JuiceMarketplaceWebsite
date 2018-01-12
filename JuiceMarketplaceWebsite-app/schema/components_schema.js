const self = {};

self.Empty = {
    type: 'object',
    properties: {},
    additionalProperties: false
};

self.Components_Body = {
    type: 'object',
    properties: {
        name: {
            type: 'string',
            minLength: 1,
            maxLength: 250
        },
        description: {
            type: 'string',
            minLength: 1,
            maxLength: 3000
        }
    },
    required: ['name', 'description'],
    additionalProperties: false
};

module.exports = self;