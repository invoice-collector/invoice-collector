
import { SketchCollector } from '../../sketchCollector';

export class ZepassCollector extends SketchCollector {

    static CONFIG = {
        id: "zepass",
        name: "ZePass",
        description: "i18n.collectors.zepass.description",
        version: "0",
        website: "https://www.zepass.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/123811.jpg",
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
        entryUrl: "https://www.zepass.com/",
    }

    constructor() {
        super(ZepassCollector.CONFIG);
    }
}
