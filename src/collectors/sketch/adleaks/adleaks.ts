
import { SketchCollector } from '../../sketchCollector';

export class AdleaksCollector extends SketchCollector {

    static CONFIG = {
        id: "adleaks",
        name: "Adleaks",
        description: "i18n.collectors.adleaks.description",
        version: "0",
        website: "https://www.billingportal.com/s/adleaks-bt/statements",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/203083.jpg",
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
        entryUrl: "https://www.billingportal.com/s/adleaks-bt/statements",
    }

    constructor() {
        super(AdleaksCollector.CONFIG);
    }
}
