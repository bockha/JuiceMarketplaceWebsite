/**
 * Created by beuttlerma on 09.02.17.
 */

const self = {};

self.Empty = {
    type: 'object',
    properties: {},
    additionalProperties: false
};

self.Users_Query = {
    type: 'object',
    properties: {
        orderedBy: {
            type: 'string',
            enum: ['usernameASC', 'usernameDESC', 'RANDOM']
        },
        from: {
            type: 'integer'
        },
        to: {
            type: 'integer'
        }
    },
    additionalProperties: false
};

module.exports = self;