
import { SketchCollector } from '../../sketchCollector';

export class PraxispandaCollector extends SketchCollector {

    static CONFIG = {
        id: "praxispanda",
        name: "PraxisPanda",
        description: "i18n.collectors.praxispanda.description",
        version: "0",
        website: "https://www.praxispanda.de/account/invoice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4553347.jpg",
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
        entryUrl: "https://www.praxispanda.de/account/invoice",
    }

    constructor() {
        super(PraxispandaCollector.CONFIG);
    }
}
