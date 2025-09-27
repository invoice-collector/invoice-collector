
import { SketchCollector } from '../../sketchCollector';

export class ReventixSipbaseCollector extends SketchCollector {

    static CONFIG = {
        id: "reventix_sipbase",
        name: "reventix SIPbase",
        description: "i18n.collectors.reventix_sipbase.description",
        version: "0",
        website: "https://login.sipbase.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/22234.jpg",
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
        entryUrl: "https://login.sipbase.de/",
    }

    constructor() {
        super(ReventixSipbaseCollector.CONFIG);
    }
}
