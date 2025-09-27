
import { SketchCollector } from '../../sketchCollector';

export class PayfitFrCollector extends SketchCollector {

    static CONFIG = {
        id: "payfit_fr",
        name: "Payfit FR",
        description: "i18n.collectors.payfit_fr.description",
        version: "0",
        website: "https://payfit.com/fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/741162.jpg",
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
        entryUrl: "https://payfit.com/fr/",
    }

    constructor() {
        super(PayfitFrCollector.CONFIG);
    }
}
