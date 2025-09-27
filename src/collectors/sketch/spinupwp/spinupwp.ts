
import { SketchCollector } from '../../sketchCollector';

export class SpinupwpCollector extends SketchCollector {

    static CONFIG = {
        id: "spinupwp",
        name: "SpinupWP",
        description: "i18n.collectors.spinupwp.description",
        version: "0",
        website: "https://spinupwp.app/billing#invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/178818.jpg",
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
        entryUrl: "https://spinupwp.app/billing#invoices",
    }

    constructor() {
        super(SpinupwpCollector.CONFIG);
    }
}
