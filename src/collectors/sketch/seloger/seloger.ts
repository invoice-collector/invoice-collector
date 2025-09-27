
import { SketchCollector } from '../../sketchCollector';

export class SelogerCollector extends SketchCollector {

    static CONFIG = {
        id: "seloger",
        name: "Seloger",
        description: "i18n.collectors.seloger.description",
        version: "0",
        website: "https://www.seloger.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778788.jpg",
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
        entryUrl: "https://www.seloger.com/",
    }

    constructor() {
        super(SelogerCollector.CONFIG);
    }
}
