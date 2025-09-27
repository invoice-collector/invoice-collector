
import { SketchCollector } from '../../sketchCollector';

export class MyhermesDeGeschaftskundenCollector extends SketchCollector {

    static CONFIG = {
        id: "myhermes_de_geschaftskunden",
        name: "myhermes.de - Geschaftskunden",
        description: "i18n.collectors.myhermes_de_geschaftskunden.description",
        version: "0",
        website: "https://business.myhermes.de/konto/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8198.jpg",
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
        entryUrl: "https://business.myhermes.de/konto/",
    }

    constructor() {
        super(MyhermesDeGeschaftskundenCollector.CONFIG);
    }
}
