
import { SketchCollector } from '../../sketchCollector';

export class SteuerseminareGrafCollector extends SketchCollector {

    static CONFIG = {
        id: "steuerseminare_graf",
        name: "Steuerseminare Graf",
        description: "i18n.collectors.steuerseminare_graf.description",
        version: "0",
        website: "https://www.steuerseminare-graf.de/kundenkonto/rechnungen/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/89598.jpg",
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
        entryUrl: "https://www.steuerseminare-graf.de/kundenkonto/rechnungen/",
    }

    constructor() {
        super(SteuerseminareGrafCollector.CONFIG);
    }
}
