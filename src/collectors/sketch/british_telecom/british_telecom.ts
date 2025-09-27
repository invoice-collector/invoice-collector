
import { SketchCollector } from '../../sketchCollector';

export class BritishTelecomCollector extends SketchCollector {

    static CONFIG = {
        id: "british_telecom",
        name: "British Telecom",
        description: "i18n.collectors.british_telecom.description",
        version: "0",
        website: "https://my.bt.com/s/apps/appsmybt/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/71234.jpg",
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
        entryUrl: "https://my.bt.com/s/apps/appsmybt/",
    }

    constructor() {
        super(BritishTelecomCollector.CONFIG);
    }
}
