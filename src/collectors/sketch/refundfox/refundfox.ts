
import { SketchCollector } from '../../sketchCollector';

export class RefundfoxCollector extends SketchCollector {

    static CONFIG = {
        id: "refundfox",
        name: "RefundFox",
        description: "i18n.collectors.refundfox.description",
        version: "0",
        website: "https://portal.refundfox.com/#/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/236111.jpg",
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
        entryUrl: "https://portal.refundfox.com/#/account",
    }

    constructor() {
        super(RefundfoxCollector.CONFIG);
    }
}
