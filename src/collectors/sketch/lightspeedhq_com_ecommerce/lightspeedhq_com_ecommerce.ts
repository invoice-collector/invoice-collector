
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LightspeedhqComEcommerceCollector extends SketchCollector {

    static CONFIG = {
        id: "lightspeedhq_com_ecommerce",
        name: "lightspeedhq.com - ecommerce",
        description: "i18n.collectors.lightspeedhq_com_ecommerce.description",
        version: "0",
        website: "https://www.lightspeedhq.com/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/20476.jpg",
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
        entryUrl: "https://www.lightspeedhq.com/login/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LightspeedhqComEcommerceCollector.CONFIG);
    }
}
