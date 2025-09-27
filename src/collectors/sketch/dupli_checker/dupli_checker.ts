
import { SketchCollector } from '../../sketchCollector';

export class DupliCheckerCollector extends SketchCollector {

    static CONFIG = {
        id: "dupli_checker",
        name: "Dupli Checker",
        description: "i18n.collectors.dupli_checker.description",
        version: "0",
        website: "https://pro.duplichecker.com/account-settings",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4181714.jpg",
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
        entryUrl: "https://pro.duplichecker.com/account-settings",
    }

    constructor() {
        super(DupliCheckerCollector.CONFIG);
    }
}
