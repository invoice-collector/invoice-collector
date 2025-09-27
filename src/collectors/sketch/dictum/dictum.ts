
import { SketchCollector } from '../../sketchCollector';

export class DictumCollector extends SketchCollector {

    static CONFIG = {
        id: "dictum",
        name: "Dictum",
        description: "i18n.collectors.dictum.description",
        version: "0",
        website: "https://www.dictum.com/de/konto/meine-bestellungen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/640530.jpg",
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
        entryUrl: "https://www.dictum.com/de/konto/meine-bestellungen",
    }

    constructor() {
        super(DictumCollector.CONFIG);
    }
}
