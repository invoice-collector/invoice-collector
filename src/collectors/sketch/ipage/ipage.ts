
import { SketchCollector } from '../../sketchCollector';

export class IpageCollector extends SketchCollector {

    static CONFIG = {
        id: "ipage",
        name: "iPage",
        description: "i18n.collectors.ipage.description",
        version: "0",
        website: "https://www1.ipage.com/secure/login.bml",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9432.jpg",
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
        entryUrl: "https://www1.ipage.com/secure/login.bml",
    }

    constructor() {
        super(IpageCollector.CONFIG);
    }
}
