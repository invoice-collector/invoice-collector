
import { SketchCollector } from '../../sketchCollector';

export class NordbuchCollector extends SketchCollector {

    static CONFIG = {
        id: "nordbuch",
        name: "Nordbuch",
        description: "i18n.collectors.nordbuch.description",
        version: "0",
        website: "https://mein.nordbuch.com/lieferung/lieferscheine-und-gutschriftanzeigen.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1526329.jpg",
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
        entryUrl: "https://mein.nordbuch.com/lieferung/lieferscheine-und-gutschriftanzeigen.html",
    }

    constructor() {
        super(NordbuchCollector.CONFIG);
    }
}
