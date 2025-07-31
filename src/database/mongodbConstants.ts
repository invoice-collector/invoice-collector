import { Document } from "mongodb";

export const buildCustomerStatsPipeline = (matcher: object): Document[] => {
    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1).getTime();
    return [
        { $match: matcher },
        {
            $lookup: {
                from: "users",
                localField: "_id",
                foreignField: "customer_id",
                as: "users"
            }
        },
        { $unwind: { path: "$users", preserveNullAndEmptyArrays: true } },
        {
            $lookup: {
                from: "credentials",
                localField: "users._id",
                foreignField: "user_id",
                as: "credentials"
            }
        },
        { $unwind: { path: "$credentials", preserveNullAndEmptyArrays: true } },
        {
        $addFields: {
            invoicesThisMonth: {
                $cond: [
                    { $isArray: "$credentials.invoices" },
                    {
                        $size: {
                            $filter: {
                            input: "$credentials.invoices",
                            as: "invoice",
                            cond: { $gte: ["$$invoice.timestamp", startOfMonth] }
                            }
                        }
                    },
                    0
                ]
            }
        }
        },
        {
            $group: {
                _id: "$_id",
                email: { $first: "$email" },
                password: { $first: "$password" },
                name: { $first: "$name" },
                callback: { $first: "$callback" },
                remoteId: { $first: "$remoteId" },
                bearer: { $first: "$bearer" },
                theme: { $first: "$theme" },
                subscribedCollectors: { $first: "$subscribedCollectors" },
                isSubscribedToAll: { $first: "$isSubscribedToAll" },
                displaySketchCollectors: { $first: "$displaySketchCollectors" },
                maxDelayBetweenCollect: { $first: "$maxDelayBetweenCollect" },
                plan: { $first: "$plan" },
                usersSet: { $addToSet: "$users._id" },
                credentialsSet: { $addToSet: "$credentials._id" },
                invoicesCount: { $sum: "$invoicesThisMonth" }
            }
        },
        {
            $addFields: {
                stats: {
                    users: { $size: "$usersSet" },
                    credentials: { $size: "$credentialsSet" },
                    invoicesThisMonth: "$invoicesCount"
                }
            }
        }
    ];
}