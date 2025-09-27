
import { SketchCollector } from '../../sketchCollector';

export class AnDeCollector extends SketchCollector {

    static CONFIG = {
        id: "an_de",
        name: "an!de",
        description: "i18n.collectors.an_de.description",
        version: "0",
        website: "https://kunde.an.de/account/Rechnungen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9014.jpg",
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
        entryUrl: "https://kunde.an.de/account/Rechnungen",
    }

    constructor() {
        super(AnDeCollector.CONFIG);
    }
}
