
import { SketchCollector } from '../../sketchCollector';

export class MerChargeportalCollector extends SketchCollector {

    static CONFIG = {
        id: "mer_chargeportal",
        name: "Mer Chargeportal",
        description: "i18n.collectors.mer_chargeportal.description",
        version: "0",
        website: "https://chargeportal.de.mer.eco/secured/statements",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2142661.jpg",
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
        entryUrl: "https://chargeportal.de.mer.eco/secured/statements",
    }

    constructor() {
        super(MerChargeportalCollector.CONFIG);
    }
}
