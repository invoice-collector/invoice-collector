
import { SketchCollector } from '../../sketchCollector';

export class SuisaCollector extends SketchCollector {

    static CONFIG = {
        id: "suisa",
        name: "SUISA",
        description: "i18n.collectors.suisa.description",
        version: "0",
        website: "https://www.suisa.ch/de/meta/mein-konto.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/552911.jpg",
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
        entryUrl: "https://www.suisa.ch/de/meta/mein-konto.html",
    }

    constructor() {
        super(SuisaCollector.CONFIG);
    }
}
