
import { SketchCollector } from '../../sketchCollector';

export class SpamdrainCollector extends SketchCollector {

    static CONFIG = {
        id: "spamdrain",
        name: "Spamdrain",
        description: "i18n.collectors.spamdrain.description",
        version: "0",
        website: "https://spamdrain.com/en/login.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3137544.jpg",
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
        entryUrl: "https://spamdrain.com/en/login.html",
    }

    constructor() {
        super(SpamdrainCollector.CONFIG);
    }
}
