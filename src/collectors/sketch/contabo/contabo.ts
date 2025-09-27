
import { SketchCollector } from '../../sketchCollector';

export class ContaboCollector extends SketchCollector {

    static CONFIG = {
        id: "contabo",
        name: "Contabo",
        description: "i18n.collectors.contabo.description",
        version: "0",
        website: "https://my.contabo.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2437.jpg",
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
        entryUrl: "https://my.contabo.de",
    }

    constructor() {
        super(ContaboCollector.CONFIG);
    }
}
