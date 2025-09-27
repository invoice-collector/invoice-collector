
import { SketchCollector } from '../../sketchCollector';

export class PurevpnCollector extends SketchCollector {

    static CONFIG = {
        id: "purevpn",
        name: "PUREVPN",
        description: "i18n.collectors.purevpn.description",
        version: "0",
        website: "https://my.purevpn.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/955981.jpg",
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
        entryUrl: "https://my.purevpn.com/login",
    }

    constructor() {
        super(PurevpnCollector.CONFIG);
    }
}
