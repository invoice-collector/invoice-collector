
import { SketchCollector } from '../../sketchCollector';

export class IronsourceCollector extends SketchCollector {

    static CONFIG = {
        id: "ironsource",
        name: "IronSource",
        description: "i18n.collectors.ironsource.description",
        version: "0",
        website: "https://platform.ironsrc.com/partners/funds/payments/statements",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/770373.jpg",
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
        entryUrl: "https://platform.ironsrc.com/partners/funds/payments/statements",
    }

    constructor() {
        super(IronsourceCollector.CONFIG);
    }
}
