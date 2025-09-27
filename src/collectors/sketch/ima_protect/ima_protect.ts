
import { SketchCollector } from '../../sketchCollector';

export class ImaProtectCollector extends SketchCollector {

    static CONFIG = {
        id: "ima_protect",
        name: "ima protect",
        description: "i18n.collectors.ima_protect.description",
        version: "0",
        website: "https://www.imaprotect.com/fr/client/account/contract",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2254832.jpg",
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
        entryUrl: "https://www.imaprotect.com/fr/client/account/contract",
    }

    constructor() {
        super(ImaProtectCollector.CONFIG);
    }
}
