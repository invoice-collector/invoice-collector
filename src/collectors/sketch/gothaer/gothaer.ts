
import { SketchCollector } from '../../sketchCollector';

export class GothaerCollector extends SketchCollector {

    static CONFIG = {
        id: "gothaer",
        name: "Gothaer",
        description: "i18n.collectors.gothaer.description",
        version: "0",
        website: "https://www.gothaer.de/meine-gothaer/portal.htm#/documents",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4607386.jpg",
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
        entryUrl: "https://www.gothaer.de/meine-gothaer/portal.htm#/documents",
    }

    constructor() {
        super(GothaerCollector.CONFIG);
    }
}
