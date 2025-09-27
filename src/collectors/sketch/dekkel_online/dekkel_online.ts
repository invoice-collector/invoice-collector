
import { SketchCollector } from '../../sketchCollector';

export class DekkelOnlineCollector extends SketchCollector {

    static CONFIG = {
        id: "dekkel_online",
        name: "Dekkel-Online",
        description: "i18n.collectors.dekkel_online.description",
        version: "0",
        website: "http://dekkel-online.lekker.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/27489.jpg",
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
        entryUrl: "http://dekkel-online.lekker.de",
    }

    constructor() {
        super(DekkelOnlineCollector.CONFIG);
    }
}
