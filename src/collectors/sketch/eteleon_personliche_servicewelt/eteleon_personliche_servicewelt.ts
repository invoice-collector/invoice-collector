
import { SketchCollector } from '../../sketchCollector';

export class EteleonPersonlicheServiceweltCollector extends SketchCollector {

    static CONFIG = {
        id: "eteleon_personliche_servicewelt",
        name: "eteleon - Personliche Servicewelt",
        description: "i18n.collectors.eteleon_personliche_servicewelt.description",
        version: "0",
        website: "https://mein.eteleon.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/126579.jpg",
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
        entryUrl: "https://mein.eteleon.de/",
    }

    constructor() {
        super(EteleonPersonlicheServiceweltCollector.CONFIG);
    }
}
