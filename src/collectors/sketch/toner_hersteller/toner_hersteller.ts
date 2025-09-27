
import { SketchCollector } from '../../sketchCollector';

export class TonerHerstellerCollector extends SketchCollector {

    static CONFIG = {
        id: "toner_hersteller",
        name: "Toner Hersteller",
        description: "i18n.collectors.toner_hersteller.description",
        version: "0",
        website: "http://www.tonerhersteller.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/541383.jpg",
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
        entryUrl: "http://www.tonerhersteller.de",
    }

    constructor() {
        super(TonerHerstellerCollector.CONFIG);
    }
}
