
import { SketchCollector } from '../../sketchCollector';

export class SmunchShiverNebulaCollector extends SketchCollector {

    static CONFIG = {
        id: "smunch_shiver_nebula",
        name: "Smunch (Shiver Nebula)",
        description: "i18n.collectors.smunch_shiver_nebula.description",
        version: "0",
        website: "https://my.smunch.co/invoices/company",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1918693.jpg",
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
        entryUrl: "https://my.smunch.co/invoices/company",
    }

    constructor() {
        super(SmunchShiverNebulaCollector.CONFIG);
    }
}
