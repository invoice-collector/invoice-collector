import { Document } from 'mongodb';

export const buildCustomerStatsPipeline = (matcher: object): Document[] => {
    return [
        // Match the customer
        { $match: matcher },

        // Facet to compute collector_id mapping, users created by month, invoices per month, and credentials created by month
        {
            $facet: {
                // Facet for collector_id mapping
                collectorStats: [
                    {
                        $lookup: {
                            from: 'users',
                            localField: '_id',
                            foreignField: 'customer_id',
                            as: 'users',
                        },
                    },
                    { $unwind: { path: '$users', preserveNullAndEmptyArrays: false } },
                    {
                        $lookup: {
                            from: 'credentials',
                            localField: 'users._id',
                            foreignField: 'user_id',
                            as: 'credentials',
                        },
                    },
                    { $unwind: { path: '$credentials', preserveNullAndEmptyArrays: false } },
                    {
                        $group: {
                            _id: '$credentials.collector_id',
                            count: { $sum: 1 },
                        },
                    },
                    {
                        $project: {
                            collector_id: '$_id',
                            credentials: '$count',
                            _id: 0,
                        },
                    },
                    {
                        $sort: { credentials: -1 },
                    },
                ],

                // Facet for users created by month
                usersByMonth: [
                    {
                        $lookup: {
                            from: 'users',
                            localField: '_id',
                            foreignField: 'customer_id',
                            as: 'users',
                        },
                    },
                    { $unwind: { path: '$users', preserveNullAndEmptyArrays: false } },
                    {
                        $addFields: {
                            month: {
                                $dateToString: {
                                    format: '%Y-%m',
                                    date: { $toDate: '$users.createdAt' },
                                },
                            },
                        },
                    },
                    {
                        $group: {
                            _id: '$month',
                            users: { $sum: 1 },
                        },
                    },
                    {
                        $project: {
                            month: '$_id',
                            users: 1,
                            _id: 0,
                        },
                    },
                    { $sort: { month: -1 } },
                ],

                // Facet for invoices collected by month
                invoicesByMonth: [
                    {
                        $lookup: {
                            from: 'users',
                            localField: '_id',
                            foreignField: 'customer_id',
                            as: 'users',
                        },
                    },
                    { $unwind: { path: '$users', preserveNullAndEmptyArrays: false } },
                    {
                        $lookup: {
                            from: 'credentials',
                            localField: 'users._id',
                            foreignField: 'user_id',
                            as: 'credentials',
                        },
                    },
                    { $unwind: { path: '$credentials', preserveNullAndEmptyArrays: false } },
                    { $unwind: { path: '$credentials.invoices', preserveNullAndEmptyArrays: false } },
                    {
                        $match: {
                            'credentials.invoices.collected_timestamp': { $exists: true, $ne: null },
                        },
                    },
                    {
                        $addFields: {
                            month: {
                                $dateToString: {
                                    format: '%Y-%m',
                                    date: { $toDate: '$credentials.invoices.collected_timestamp' },
                                },
                            },
                        },
                    },
                    {
                        $group: {
                            _id: '$month',
                            invoices: { $sum: 1 },
                        },
                    },
                    {
                        $project: {
                            month: '$_id',
                            invoices: 1,
                            _id: 0,
                        },
                    },
                    { $sort: { month: -1 } },
                ],

                // Facet for credentials created by month
                credentialsByMonth: [
                    {
                        $lookup: {
                            from: 'users',
                            localField: '_id',
                            foreignField: 'customer_id',
                            as: 'users',
                        },
                    },
                    { $unwind: { path: '$users', preserveNullAndEmptyArrays: false } },
                    {
                        $lookup: {
                            from: 'credentials',
                            localField: 'users._id',
                            foreignField: 'user_id',
                            as: 'credentials',
                        },
                    },
                    { $unwind: { path: '$credentials', preserveNullAndEmptyArrays: false } },
                    {
                        $addFields: {
                            month: {
                                $dateToString: {
                                    format: '%Y-%m',
                                    date: { $toDate: '$credentials.create_timestamp' },
                                },
                            },
                        },
                    },
                    {
                        $group: {
                            _id: '$month',
                            credentials: { $sum: 1 },
                            credentialsAuthenticationError: {
                                $sum: {
                                    $cond: [
                                        { $eq: ['$credentials.state.index', -1] },
                                        1,
                                        0,
                                    ],
                                },
                            },
                            credentialsDisconnectedError: {
                                $sum: {
                                    $cond: [
                                        { $eq: ['$credentials.state.index', -2] },
                                        1,
                                        0,
                                    ],
                                },
                            },
                        },
                    },
                    {
                        $project: {
                            month: '$_id',
                            credentials: 1,
                            credentialsAuthenticationError: 1,
                            credentialsDisconnectedError: 1,
                            _id: 0,
                        },
                    },
                    { $sort: { month: -1 } },
                ],
            },
        },
    ];
};



export const getAllCustomerData = (matcher: object): Document[] => {
    return [
        // Match the customer
        { $match: matcher },
        {
            '$lookup': {
                'from': 'users',
                'localField': '_id',
                'foreignField': 'customer_id',
                'as': 'users',
            }
        },
        {
            '$unwind': {
                'path': '$users',
                'preserveNullAndEmptyArrays': true,
            }
        },
        {
            '$lookup': {
                'from': 'credentials',
                'localField': 'users._id',
                'foreignField': 'user_id',
                'as': 'users.credentials',
            }
        },
        {
            '$group': {
                '_id': '$_id',
                'name': { '$first': '$name'},
                'plan': { '$first': '$plan'},
                'users': { '$push': '$users' },
            }
        }
    ];
};