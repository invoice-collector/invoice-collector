
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class VersaCommerceCollector extends SketchCollector {

    static CONFIG = {
        id: "versa_commerce",
        name: "versa commerce",
        description: "i18n.collectors.versa_commerce.description",
        version: "0",
        website: "https://app.versacommerce.de/admin/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/19518.jpg",
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
        entryUrl: "https://app.versacommerce.de/admin/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VersaCommerceCollector.CONFIG);
    }
}
