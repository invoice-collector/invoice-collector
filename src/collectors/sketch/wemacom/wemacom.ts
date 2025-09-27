
import { SketchCollector } from '../../sketchCollector';

export class WemacomCollector extends SketchCollector {

    static CONFIG = {
        id: "wemacom",
        name: "WEMACOM",
        description: "i18n.collectors.wemacom.description",
        version: "0",
        website: "https://login.wemacom.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9201.jpg",
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
        entryUrl: "https://login.wemacom.de/",
    }

    constructor() {
        super(WemacomCollector.CONFIG);
    }
}
