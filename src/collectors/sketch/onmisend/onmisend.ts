
import { SketchCollector } from '../../sketchCollector';

export class OnmisendCollector extends SketchCollector {

    static CONFIG = {
        id: "onmisend",
        name: "Onmisend",
        description: "i18n.collectors.onmisend.description",
        version: "0",
        website: "https://app.omnisend.com/accounts/billing-history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/202967.jpg",
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
        entryUrl: "https://app.omnisend.com/accounts/billing-history",
    }

    constructor() {
        super(OnmisendCollector.CONFIG);
    }
}
