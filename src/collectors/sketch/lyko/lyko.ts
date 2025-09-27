
import { SketchCollector } from '../../sketchCollector';

export class LykoCollector extends SketchCollector {

    static CONFIG = {
        id: "lyko",
        name: "Lyko",
        description: "i18n.collectors.lyko.description",
        version: "0",
        website: "https://lyko.com/de/meine-seite/bestellubersicht",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1217601.jpg",
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
        entryUrl: "https://lyko.com/de/meine-seite/bestellubersicht",
    }

    constructor() {
        super(LykoCollector.CONFIG);
    }
}
