
import { SketchCollector } from '../../sketchCollector';

export class SuperchatDeCollector extends SketchCollector {

    static CONFIG = {
        id: "superchat_de",
        name: "superchat.de",
        description: "i18n.collectors.superchat_de.description",
        version: "0",
        website: "https://app.superchat.de/subscription/invoicing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1323291.jpg",
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
        entryUrl: "https://app.superchat.de/subscription/invoicing",
    }

    constructor() {
        super(SuperchatDeCollector.CONFIG);
    }
}
