
import { SketchCollector } from '../../sketchCollector';

export class RheinwerkCollector extends SketchCollector {

    static CONFIG = {
        id: "rheinwerk",
        name: "Rheinwerk",
        description: "i18n.collectors.rheinwerk.description",
        version: "0",
        website: "https://www.rheinwerk-verlag.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9434.jpg",
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
        entryUrl: "https://www.rheinwerk-verlag.de/",
    }

    constructor() {
        super(RheinwerkCollector.CONFIG);
    }
}
