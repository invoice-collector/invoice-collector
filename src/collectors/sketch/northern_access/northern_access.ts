
import { SketchCollector } from '../../sketchCollector';

export class NorthernAccessCollector extends SketchCollector {

    static CONFIG = {
        id: "northern_access",
        name: "Northern Access",
        description: "i18n.collectors.northern_access.description",
        version: "0",
        website: "http://www.northern-access.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9586.jpg",
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
        entryUrl: "http://www.northern-access.de",
    }

    constructor() {
        super(NorthernAccessCollector.CONFIG);
    }
}
