
import { SketchCollector } from '../../sketchCollector';

export class VideoboltCollector extends SketchCollector {

    static CONFIG = {
        id: "videobolt",
        name: "Videobolt",
        description: "i18n.collectors.videobolt.description",
        version: "0",
        website: "https://app.videobolt.net/account/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2254830.jpg",
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
        entryUrl: "https://app.videobolt.net/account/billing",
    }

    constructor() {
        super(VideoboltCollector.CONFIG);
    }
}
