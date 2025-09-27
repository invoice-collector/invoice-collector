
import { SketchCollector } from '../../sketchCollector';

export class OteloCollector extends SketchCollector {

    static CONFIG = {
        id: "otelo",
        name: "otelo",
        description: "i18n.collectors.otelo.description",
        version: "0",
        website: "https://mein.otelo.de/service/mein-otelo/postpaid/rechnungen-evn.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9241.jpg",
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
        entryUrl: "https://mein.otelo.de/service/mein-otelo/postpaid/rechnungen-evn.html",
    }

    constructor() {
        super(OteloCollector.CONFIG);
    }
}
