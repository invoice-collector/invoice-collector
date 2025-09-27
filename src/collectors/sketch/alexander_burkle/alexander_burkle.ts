
import { SketchCollector } from '../../sketchCollector';

export class AlexanderBurkleCollector extends SketchCollector {

    static CONFIG = {
        id: "alexander_burkle",
        name: "Alexander Burkle",
        description: "i18n.collectors.alexander_burkle.description",
        version: "0",
        website: "https://alexander-buerkle.com/de-de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1526322.jpg",
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
        entryUrl: "https://alexander-buerkle.com/de-de/",
    }

    constructor() {
        super(AlexanderBurkleCollector.CONFIG);
    }
}
