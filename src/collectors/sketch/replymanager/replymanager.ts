
import { SketchCollector } from '../../sketchCollector';

export class ReplymanagerCollector extends SketchCollector {

    static CONFIG = {
        id: "replymanager",
        name: "Replymanager",
        description: "i18n.collectors.replymanager.description",
        version: "0",
        website: "https://dashboard-3.replymanager.com/payments",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/132302.jpg",
        params: {
            email: {
                type: "email",
                name: "i18n.collectors.all.email",
                placeholder: "i18n.collectors.all.email.placeholder",
                mandatory: true
            },
            password: {
                type: "password",
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true
            }
        },
        entryUrl: "https://dashboard-3.replymanager.com/payments",
    }

    constructor() {
        super(ReplymanagerCollector.CONFIG);
    }
}
