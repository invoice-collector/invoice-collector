
import { SketchCollector } from '../../sketchCollector';

export class KobitonCollector extends SketchCollector {

    static CONFIG = {
        id: "kobiton",
        name: "Kobiton",
        description: "i18n.collectors.kobiton.description",
        version: "0",
        website: "https://kobiton.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/514909.jpg",
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
        entryUrl: "https://kobiton.com/",
    }

    constructor() {
        super(KobitonCollector.CONFIG);
    }
}
