
import { SketchCollector } from '../../sketchCollector';

export class PluxeeCollector extends SketchCollector {

    static CONFIG = {
        id: "pluxee",
        name: "Pluxee",
        description: "i18n.collectors.pluxee.description",
        version: "0",
        website: "https://commercants.pluxee.fr/invoice/restaurant",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3103865.jpg",
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
        entryUrl: "https://commercants.pluxee.fr/invoice/restaurant",
    }

    constructor() {
        super(PluxeeCollector.CONFIG);
    }
}
