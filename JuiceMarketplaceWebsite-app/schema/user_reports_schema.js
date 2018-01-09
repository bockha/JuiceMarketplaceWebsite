/**
 * Created by beuttlerma on 09.02.17.
 */

const self = {};

self.Empty = {
    type: 'object',
    properties: {},
    additionalProperties: false
};

self.Revenue_Query = {
    type: 'object',
    properties: {
        from: {
            type: 'string',
            format: 'date-time'
        },
        to: {
            type: 'string',
            format: 'date-time'
        },
        userId: {
            type: 'string',
            format: 'uuid'
        }
    },
    required: [
        'from',
        'to',
        'userId'
    ],
    additionalProperties: false
};

self.Top_Query = {
    type: 'object',
    properties: {
        from: {
            type: 'string',
            format: 'date-time'
        },
        to: {
            type: 'string',
            format: 'date-time'
        },
        limit: {
            type: 'integer',
            minimum: 1,
            maximum: 10
        },
        userId: {
            type: 'string',
            format: 'uuid'
        }
    },
    required: [
        'from',
        'to',
        'limit',
        'userId'
    ],
    additionalProperties: false
};

module.exports = self;