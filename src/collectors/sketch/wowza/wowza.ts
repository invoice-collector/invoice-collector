
import { SketchCollector } from '../../sketchCollector';

export class WowzaCollector extends SketchCollector {

    static CONFIG = {
        id: "wowza",
        name: "Wowza",
        description: "i18n.collectors.wowza.description",
        version: "0",
        website: "http://cloud.wowza.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/55227.jpg",
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
        entryUrl: "http://cloud.wowza.com",
    }

    constructor() {
        super(WowzaCollector.CONFIG);
    }
}
