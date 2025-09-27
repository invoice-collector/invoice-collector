
import { SketchCollector } from '../../sketchCollector';

export class WebmailerCollector extends SketchCollector {

    static CONFIG = {
        id: "webmailer",
        name: "webmailer",
        description: "i18n.collectors.webmailer.description",
        version: "0",
        website: "https://email.ionos.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/241367.jpg",
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
        entryUrl: "https://email.ionos.de",
    }

    constructor() {
        super(WebmailerCollector.CONFIG);
    }
}
