
import { SketchCollector } from '../../sketchCollector';

export class GreetzNlCollector extends SketchCollector {

    static CONFIG = {
        id: "greetz_nl",
        name: "Greetz.nl",
        description: "i18n.collectors.greetz_nl.description",
        version: "0",
        website: "https://www.greetz.nl/nl/account/login/?returnUrl=%2Fnl%2Fmyaccount%2F",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/33048.jpg",
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
        entryUrl: "https://www.greetz.nl/nl/account/login/?returnUrl=%2Fnl%2Fmyaccount%2F",
    }

    constructor() {
        super(GreetzNlCollector.CONFIG);
    }
}
