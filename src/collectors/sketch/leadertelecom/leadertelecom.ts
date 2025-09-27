
import { SketchCollector } from '../../sketchCollector';

export class LeadertelecomCollector extends SketchCollector {

    static CONFIG = {
        id: "leadertelecom",
        name: "LeaderTelecom",
        description: "i18n.collectors.leadertelecom.description",
        version: "0",
        website: "https://order.leadertelecom.biz",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/88484.jpg",
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
        entryUrl: "https://order.leadertelecom.biz",
    }

    constructor() {
        super(LeadertelecomCollector.CONFIG);
    }
}
