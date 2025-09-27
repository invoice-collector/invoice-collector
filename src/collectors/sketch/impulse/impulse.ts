
import { SketchCollector } from '../../sketchCollector';

export class ImpulseCollector extends SketchCollector {

    static CONFIG = {
        id: "impulse",
        name: "Impulse",
        description: "i18n.collectors.impulse.description",
        version: "0",
        website: "https://shop.impulse.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/45952.jpg",
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
        entryUrl: "https://shop.impulse.de/",
    }

    constructor() {
        super(ImpulseCollector.CONFIG);
    }
}
