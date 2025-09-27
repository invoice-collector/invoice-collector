
import { SketchCollector } from '../../sketchCollector';

export class CaiwayCollector extends SketchCollector {

    static CONFIG = {
        id: "caiway",
        name: "Caiway",
        description: "i18n.collectors.caiway.description",
        version: "0",
        website: "https://mijn.caiway.nl/general.logOn.logic",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32328.jpg",
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
        entryUrl: "https://mijn.caiway.nl/general.logOn.logic",
    }

    constructor() {
        super(CaiwayCollector.CONFIG);
    }
}
