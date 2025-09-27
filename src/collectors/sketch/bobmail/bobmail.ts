
import { SketchCollector } from '../../sketchCollector';

export class BobmailCollector extends SketchCollector {

    static CONFIG = {
        id: "bobmail",
        name: "Bobmail",
        description: "i18n.collectors.bobmail.description",
        version: "0",
        website: "https://bobmail.nl/account/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32361.jpg",
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
        entryUrl: "https://bobmail.nl/account/login/",
    }

    constructor() {
        super(BobmailCollector.CONFIG);
    }
}
