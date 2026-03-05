const path = require('path');

const SWAGGER_DEFINITION = {
    apis: [path.join(__dirname, '..', 'src', 'index.ts'), path.join(__dirname, '..', 'src', 'index.js')],
    definition: {
        openapi: '3.0.3',
        info: {
            title: 'Invoice Collector API',
            description: 'API for managing invoice collection, customers, users, credentials, and collectors.',
            version: '1.0.0',
        },
        servers: [{ url: '/api/v1', description: 'API v1' }],
        components: {
            securitySchemes: {
                CustomerBearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    description: 'Customer bearer token',
                },
                UserBearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    description: 'User bearer token',
                },
                TokenAuth: {
                    type: 'apiKey',
                    in: 'query',
                    name: 'token',
                    description: 'UI token obtained from POST /user',
                },
            },
            schemas: {
                Error: {
                    type: 'object',
                    properties: {
                        type: { type: 'string', example: 'error' },
                        message: { type: 'string' },
                    },
                },
                Plan: {
                    type: 'object',
                    properties: {
                        maxUsers: { type: 'integer' },
                        maxCredentials: { type: 'integer' },
                    },
                },
                UserStats: {
                    type: 'object',
                    properties: {
                        credentialsCount: { type: 'integer' },
                    },
                },
                CustomerStats: {
                    type: 'object',
                    properties: {
                        usersCount: { type: 'integer' },
                        credentialsCount: { type: 'integer' },
                    },
                },
                State: {
                    type: 'object',
                    properties: {
                        code: { type: 'integer' },
                        title: { type: 'string' },
                        message: { type: 'string' },
                    },
                },
                CollectorParam: {
                    type: 'object',
                    properties: {
                        name: { type: 'string' },
                        placeholder: { type: 'string' },
                        mandatory: { type: 'boolean' },
                        type: { type: 'string' },
                    },
                },
                CollectorConfig: {
                    type: 'object',
                    properties: {
                        id: { type: 'string' },
                        name: { type: 'string' },
                        description: { type: 'string' },
                        instructions: { type: 'string' },
                        type: { type: 'string' },
                        params: {
                            type: 'object',
                            additionalProperties: { $ref: '#/components/schemas/CollectorParam' },
                        },
                    },
                },
                Customer: {
                    type: 'object',
                    properties: {
                        id: { type: 'string' },
                        email: { type: 'string' },
                        name: { type: 'string' },
                        callback: { type: 'string' },
                        remoteId: { type: 'string' },
                        cid: { type: 'string' },
                        inviteId: { type: 'string' },
                        createdAt: { type: 'integer' },
                        theme: { type: 'string' },
                        subscribedCollectors: { type: 'array', items: { type: 'string' } },
                        isSubscribedToAll: { type: 'boolean' },
                        enableInteractiveLogin: { type: 'boolean' },
                        displaySketchCollectors: { type: 'boolean' },
                        maxDelayBetweenCollect: { type: 'integer' },
                        plan: { $ref: '#/components/schemas/Plan' },
                    },
                },
                User: {
                    type: 'object',
                    properties: {
                        id: { type: 'string' },
                        customer_id: { type: 'string' },
                        remote_id: { type: 'string' },
                        name: { type: 'string' },
                        cid: { type: 'string' },
                        locale: { type: 'string' },
                        createdAt: { type: 'integer' },
                        customer: {
                            type: 'object',
                            properties: {
                                name: { type: 'string' },
                                cid: { type: 'string' },
                            },
                        },
                        stats: { $ref: '#/components/schemas/UserStats' },
                    },
                },
                UserWithToken: {
                    type: 'object',
                    properties: {
                        id: { type: 'string' },
                        customer_id: { type: 'string' },
                        remote_id: { type: 'string' },
                        name: { type: 'string' },
                        cid: { type: 'string' },
                        locale: { type: 'string' },
                        createdAt: { type: 'integer' },
                        token: { type: 'string' },
                        stats: { $ref: '#/components/schemas/UserStats' },
                    },
                },
                UserListItem: {
                    type: 'object',
                    properties: {
                        id: { type: 'string' },
                        customer_id: { type: 'string' },
                        remote_id: { type: 'string' },
                        name: { type: 'string' },
                        cid: { type: 'string' },
                        locale: { type: 'string' },
                        createdAt: { type: 'integer' },
                        stats: { $ref: '#/components/schemas/UserStats' },
                    },
                },
                Credential: {
                    type: 'object',
                    properties: {
                        id: { type: 'string' },
                        user_id: { type: 'string' },
                        note: { type: 'string' },
                        create_timestamp: { type: 'integer' },
                        download_from_timestamp: { type: 'integer' },
                        last_collect_timestamp: { type: 'integer' },
                        next_collect_timestamp: { type: 'integer' },
                        invoices: { type: 'array', items: { type: 'object' } },
                        state: { $ref: '#/components/schemas/State' },
                        collector: { $ref: '#/components/schemas/CollectorConfig' },
                        wsPath: { type: 'string', nullable: true },
                    },
                },
            },
        },
        tags: [
            { name: 'General', description: 'General endpoints (UI, callbacks, feedback)' },
            { name: 'Authentication', description: 'Login, signup, password reset' },
            { name: 'Customer', description: 'Customer management' },
            { name: 'User', description: 'User management' },
            { name: 'Credential', description: 'Credential and collection management' },
            { name: 'Collector', description: 'Collector listing' },
        ],
    }
};

exports.SWAGGER_DEFINITION = SWAGGER_DEFINITION;
