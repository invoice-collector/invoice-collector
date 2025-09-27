
import { SketchCollector } from '../../sketchCollector';

export class AtrigaCollector extends SketchCollector {

    static CONFIG = {
        id: "atriga",
        name: "Atriga",
        description: "i18n.collectors.atriga.description",
        version: "0",
        website: "https://www.atriga.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/68372.jpg",
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
        entryUrl: "https://www.atriga.de",
    }

    constructor() {
        super(AtrigaCollector.CONFIG);
    }
}
