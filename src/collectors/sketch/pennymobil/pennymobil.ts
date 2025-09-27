
import { SketchCollector } from '../../sketchCollector';

export class PennymobilCollector extends SketchCollector {

    static CONFIG = {
        id: "pennymobil",
        name: "Pennymobil",
        description: "i18n.collectors.pennymobil.description",
        version: "0",
        website: "https://pennymobil.congstar.de/mein-pennymobil/meine-rechnungen/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/132487.jpg",
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
        entryUrl: "https://pennymobil.congstar.de/mein-pennymobil/meine-rechnungen/",
    }

    constructor() {
        super(PennymobilCollector.CONFIG);
    }
}
