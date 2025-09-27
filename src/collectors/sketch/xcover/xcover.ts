
import { SketchCollector } from '../../sketchCollector';

export class XcoverCollector extends SketchCollector {

    static CONFIG = {
        id: "xcover",
        name: "XCover",
        description: "i18n.collectors.xcover.description",
        version: "0",
        website: "https://www.xcover.com/en/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3200737.jpg",
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
        entryUrl: "https://www.xcover.com/en/account",
    }

    constructor() {
        super(XcoverCollector.CONFIG);
    }
}
