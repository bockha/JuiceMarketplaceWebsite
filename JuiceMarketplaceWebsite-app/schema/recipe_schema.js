/**
 * Created by beuttlerma on 09.02.17.
 */

const self = {};

self.Empty = {
    type: 'object',
    properties: {},
    additionalProperties: false
};

self.Recipe_Query = {
    type: 'object',
    properties: {
        createdBy: {
            type: 'string',
            format: 'uuid'
        },
        orderBy: {
            type: 'string',
            enum: ['alphASC', 'alphDESC', 'random', 'ratingASC', 'ratingDESC']
        },
        limit: {
            type: 'integer',
            minimum: 1
        },
        components: {
            type: 'array',
            items: {
                type: 'string',
                format: 'uuid'
            },
            additionalItems: false
        }
    },
    required: [],
    additionalProperties: false
};

self.License_Count_Query = {
    type: 'object',
    properties: {
        createdBy: {
            type: 'string',
            format: 'uuid'
        },
        components: {
            type: 'array',
            items: {
                type: 'string',
                format: 'uuid'
            },
            additionalItems: false
        },
        orderBy: {
            type: 'string',
            enum: ['alphASC', 'alphDESC', 'random', 'ratingASC', 'ratingDESC']
        },
        startDate: {
            type: 'string',
            format: 'date-time'
        },
        endDate: {
            type: 'string',
            format: 'date-time'
        }
    },
    required: [],
    additionalProperties: false
};

self.License_Total_Query = {
    type: 'object',
    properties: {
        createdBy: {
            type: 'string',
            format: 'uuid'
        },
        components: {
            type: 'array',
            items: {
                type: 'string',
                format: 'uuid'
            },
            additionalItems: false
        },
        startDate: {
            type: 'string',
            format: 'date-time'
        },
        endDate: {
            type: 'string',
            format: 'date-time'
        }
    },
    required: [],
    additionalProperties: false
};

self.License_History_Query = {
    type: 'object',
    properties: {
        createdBy: {
            type: 'string',
            format: 'uuid'
        },
        components: {
            type: 'array',
            items: {
                type: 'string',
                format: 'uuid'
            },
            additionalItems: false
        },
        startDate: {
            type: 'string',
            format: 'date-time'
        },
        endDate: {
            type: 'string',
            format: 'date-time'
        },
        interval: {
            type: 'string',
            enum: ['minute', 'hour', 'day', 'week', 'month', 'year']
        }
    },
    required: [],
    additionalProperties: false
};

self.Recipe_License_Count_Query = {
    type: 'object',
    properties: {
        startDate: {
            type: 'string',
            format: 'date-time'
        },
        endDate: {
            type: 'string',
            format: 'date-time'
        }
    },
    required: [],
    additionalProperties: false
};

self.Recipe_License_History_Query = {
    type: 'object',
    properties: {
        startDate: {
            type: 'string',
            format: 'date-time'
        },
        endDate: {
            type: 'string',
            format: 'date-time'
        },
        interval: {
            type: 'string',
            enum: ['minute', 'hour', 'day', 'week', 'month', 'year']
        }
    },
    required: [],
    additionalProperties: false
};

self.Recipe_Image_Body = {
    type: 'object',
    properties: {
        image: {
            type: 'string',
            pattern: '^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$'
        }
    },
    required: ['image'],
    additionalProperties: false
};

module.exports = self;