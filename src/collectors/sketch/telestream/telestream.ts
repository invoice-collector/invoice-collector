
import { SketchCollector } from '../../sketchCollector';

export class TelestreamCollector extends SketchCollector {

    static CONFIG = {
        id: "telestream",
        name: "telestream",
        description: "i18n.collectors.telestream.description",
        version: "0",
        website: "https://telestream.onfastspring.com/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9152.jpg",
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
        entryUrl: "https://telestream.onfastspring.com/account",
    }

    constructor() {
        super(TelestreamCollector.CONFIG);
    }
}
