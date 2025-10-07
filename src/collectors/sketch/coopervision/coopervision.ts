
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CoopervisionCollector extends SketchCollector {

    static CONFIG = {
        id: "coopervision",
        name: "CooperVision",
        description: "i18n.collectors.coopervision.description",
        version: "0",
        website: "https://www.ecommerce.coopervision.com/Invoices/Invoices.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/987515.jpg",
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
        entryUrl: "https://www.ecommerce.coopervision.com/Invoices/Invoices.aspx",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CoopervisionCollector.CONFIG);
    }
}
