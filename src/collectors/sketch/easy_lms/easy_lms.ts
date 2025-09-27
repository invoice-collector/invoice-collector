
import { SketchCollector } from '../../sketchCollector';

export class EasyLmsCollector extends SketchCollector {

    static CONFIG = {
        id: "easy_lms",
        name: "easy-lms",
        description: "i18n.collectors.easy_lms.description",
        version: "0",
        website: "https://easy-lms.chargebee.com/portal/v2/billing_history?source=home",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1444731.jpg",
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
        entryUrl: "https://easy-lms.chargebee.com/portal/v2/billing_history?source=home",
    }

    constructor() {
        super(EasyLmsCollector.CONFIG);
    }
}
