
import { SketchCollector } from '../../sketchCollector';

export class AcfExtendedCollector extends SketchCollector {

    static CONFIG = {
        id: "acf_extended",
        name: "ACF Extended",
        description: "i18n.collectors.acf_extended.description",
        version: "0",
        website: "https://www.acf-extended.com/account/orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3202855.jpg",
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
        entryUrl: "https://www.acf-extended.com/account/orders",
    }

    constructor() {
        super(AcfExtendedCollector.CONFIG);
    }
}
