
import { SketchCollector } from '../../sketchCollector';

export class SuddenlinkCollector extends SketchCollector {

    static CONFIG = {
        id: "suddenlink",
        name: "Suddenlink",
        description: "i18n.collectors.suddenlink.description",
        version: "0",
        website: "https://account.suddenlink.net/my-account/mybill/viewstatements.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/179850.jpg",
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
        entryUrl: "https://account.suddenlink.net/my-account/mybill/viewstatements.html",
    }

    constructor() {
        super(SuddenlinkCollector.CONFIG);
    }
}
