
import { SketchCollector } from '../../sketchCollector';

export class SteticCollector extends SketchCollector {

    static CONFIG = {
        id: "stetic",
        name: "stetic",
        description: "i18n.collectors.stetic.description",
        version: "0",
        website: "https://www.stetic.com/user/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/26538.jpg",
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
        entryUrl: "https://www.stetic.com/user/login/",
    }

    constructor() {
        super(SteticCollector.CONFIG);
    }
}
