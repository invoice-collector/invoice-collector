import { Document } from "mongodb";

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
                            from: "users",
                            localField: "_id",
                            foreignField: "customer_id",
                            as: "users"
                        }
                    },
                    { $unwind: { path: "$users", preserveNullAndEmptyArrays: false } },
                    {
                        $lookup: {
                            from: "credentials",
                            localField: "users._id",
                            foreignField: "user_id",
                            as: "credentials"
                        }
                    },
                    { $unwind: { path: "$credentials", preserveNullAndEmptyArrays: false } },
                    {
                        $group: {
                            _id: "$credentials.collector_id",
                            count: { $sum: 1 }
                        }
                    },
                    {
                        $project: {
                            collector_id: "$_id",
                            credential_count: "$count",
                            _id: 0
                        }
                    },
                    {
                        $sort: { credential_count: -1 }
                    }
                ],

                // Facet for users created by month
                usersByMonth: [
                    {
                        $lookup: {
                            from: "users",
                            localField: "_id",
                            foreignField: "customer_id",
                            as: "users"
                        }
                    },
                    { $unwind: { path: "$users", preserveNullAndEmptyArrays: false } },
                    {
                        $addFields: {
                            month: {
                                $dateToString: {
                                    format: "%Y-%m",
                                    date: { $toDate: "$users.createdAt" }
                                }
                            }
                        }
                    },
                    {
                        $group: {
                            _id: "$month",
                            user_count: { $sum: 1 }
                        }
                    },
                    {
                        $project: {
                            month: "$_id",
                            user_count: 1,
                            _id: 0
                        }
                    },
                    { $sort: { month: -1 } }
                ],

                // Facet for invoices collected by month
                invoicesByMonth: [
                    {
                        $lookup: {
                            from: "users",
                            localField: "_id",
                            foreignField: "customer_id",
                            as: "users"
                        }
                    },
                    { $unwind: { path: "$users", preserveNullAndEmptyArrays: false } },
                    {
                        $lookup: {
                            from: "credentials",
                            localField: "users._id",
                            foreignField: "user_id",
                            as: "credentials"
                        }
                    },
                    { $unwind: { path: "$credentials", preserveNullAndEmptyArrays: false } },
                    { $unwind: { path: "$credentials.invoices", preserveNullAndEmptyArrays: false } },
                    {
                        $match: {
                            "credentials.invoices.collected_timestamp": { $exists: true, $ne: null }
                        }
                    },
                    {
                        $addFields: {
                            month: {
                                $dateToString: {
                                    format: "%Y-%m",
                                    date: { $toDate: "$credentials.invoices.collected_timestamp" }
                                }
                            }
                        }
                    },
                    {
                        $group: {
                            _id: "$month",
                            invoice_count: { $sum: 1 }
                        }
                    },
                    {
                        $project: {
                            month: "$_id",
                            invoice_count: 1,
                            _id: 0
                        }
                    },
                    { $sort: { month: -1 } }
                ],

                // Facet for credentials created by month
                credentialsByMonth: [
                    {
                        $lookup: {
                            from: "users",
                            localField: "_id",
                            foreignField: "customer_id",
                            as: "users"
                        }
                    },
                    { $unwind: { path: "$users", preserveNullAndEmptyArrays: false } },
                    {
                        $lookup: {
                            from: "credentials",
                            localField: "users._id",
                            foreignField: "user_id",
                            as: "credentials"
                        }
                    },
                    { $unwind: { path: "$credentials", preserveNullAndEmptyArrays: false } },
                    {
                        $addFields: {
                            month: {
                                $dateToString: {
                                    format: "%Y-%m",
                                    date: { $toDate: "$credentials.create_timestamp" }
                                }
                            }
                        }
                    },
                    {
                        $group: {
                            _id: "$month",
                            credential_count: { $sum: 1 }
                        }
                    },
                    {
                        $project: {
                            month: "$_id",
                            credential_count: 1,
                            _id: 0
                        }
                    },
                    { $sort: { month: -1 } }
                ]
            }
        }
    ];
}