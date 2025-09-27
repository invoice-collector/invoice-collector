
import { SketchCollector } from '../../sketchCollector';

export class ApprovalmaxCollector extends SketchCollector {

    static CONFIG = {
        id: "approvalmax",
        name: "ApprovalMax",
        description: "i18n.collectors.approvalmax.description",
        version: "0",
        website: "https://www.approvalmax.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/761343.jpg",
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
        entryUrl: "https://www.approvalmax.com/",
    }

    constructor() {
        super(ApprovalmaxCollector.CONFIG);
    }
}
