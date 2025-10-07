
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ProtectedShopsCollector extends SketchCollector {

    static CONFIG = {
        id: "protected_shops",
        name: "Protected Shops",
        description: "i18n.collectors.protected_shops.description",
        version: "0",
        website: "https://www.protectedshops.de/accountPs/invoicearchive",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/26534.jpg",
        type: CollectorType.SKETCH,
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
        entryUrl: "https://www.protectedshops.de/accountPs/invoicearchive",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ProtectedShopsCollector.CONFIG);
    }
}
