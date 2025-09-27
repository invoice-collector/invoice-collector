
import { SketchCollector } from '../../sketchCollector';

export class AmbetterHealthCollector extends SketchCollector {

    static CONFIG = {
        id: "ambetter_health",
        name: "Ambetter Health",
        description: "i18n.collectors.ambetter_health.description",
        version: "0",
        website: "https://centene.softheon.com/equity/#/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/158364.jpg",
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
        entryUrl: "https://centene.softheon.com/equity/#/invoices",
    }

    constructor() {
        super(AmbetterHealthCollector.CONFIG);
    }
}
