
import { SketchCollector } from '../../sketchCollector';

export class SifaSibePlusCollector extends SketchCollector {

    static CONFIG = {
        id: "sifa_sibe_plus",
        name: "Sifa-Sibe Plus",
        description: "i18n.collectors.sifa_sibe_plus.description",
        version: "0",
        website: "https://www.sifa-sibe.de/aboplus-service-center/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4095680.jpg",
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
        entryUrl: "https://www.sifa-sibe.de/aboplus-service-center/",
    }

    constructor() {
        super(SifaSibePlusCollector.CONFIG);
    }
}
