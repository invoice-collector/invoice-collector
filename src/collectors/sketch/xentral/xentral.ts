
import { SketchCollector } from '../../sketchCollector';

export class XentralCollector extends SketchCollector {

    static CONFIG = {
        id: "xentral",
        name: "Xentral",
        description: "i18n.collectors.xentral.description",
        version: "0",
        website: "http://www.xentral.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/112795.jpg",
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
        entryUrl: "http://www.xentral.com",
    }

    constructor() {
        super(XentralCollector.CONFIG);
    }
}
