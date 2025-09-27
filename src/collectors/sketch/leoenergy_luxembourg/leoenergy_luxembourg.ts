
import { SketchCollector } from '../../sketchCollector';

export class LeoenergyLuxembourgCollector extends SketchCollector {

    static CONFIG = {
        id: "leoenergy_luxembourg",
        name: "Leoenergy Luxembourg",
        description: "i18n.collectors.leoenergy_luxembourg.description",
        version: "0",
        website: "https://my.leoenergy.lu/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4095766.jpg",
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
        entryUrl: "https://my.leoenergy.lu/invoices",
    }

    constructor() {
        super(LeoenergyLuxembourgCollector.CONFIG);
    }
}
