
import { SketchCollector } from '../../sketchCollector';

export class BrilluxCollector extends SketchCollector {

    static CONFIG = {
        id: "brillux",
        name: "Brillux",
        description: "i18n.collectors.brillux.description",
        version: "0",
        website: "https://www.brillux.de/mein-brillux/meine-bestellungen-und-rechnungen/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/57540.jpg",
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
        entryUrl: "https://www.brillux.de/mein-brillux/meine-bestellungen-und-rechnungen/",
    }

    constructor() {
        super(BrilluxCollector.CONFIG);
    }
}
