
import { SketchCollector } from '../../sketchCollector';

export class ConstantcontentCollector extends SketchCollector {

    static CONFIG = {
        id: "constantcontent",
        name: "constantcontent",
        description: "i18n.collectors.constantcontent.description",
        version: "0",
        website: "https://www.constant-content.com/area/dlogin.htm",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/449.jpg",
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
        entryUrl: "https://www.constant-content.com/area/dlogin.htm",
    }

    constructor() {
        super(ConstantcontentCollector.CONFIG);
    }
}
