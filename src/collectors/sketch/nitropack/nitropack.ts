
import { SketchCollector } from '../../sketchCollector';

export class NitropackCollector extends SketchCollector {

    static CONFIG = {
        id: "nitropack",
        name: "Nitropack",
        description: "i18n.collectors.nitropack.description",
        version: "0",
        website: "https://nitropack.io/user/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778143.jpg",
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
        entryUrl: "https://nitropack.io/user/billing",
    }

    constructor() {
        super(NitropackCollector.CONFIG);
    }
}
