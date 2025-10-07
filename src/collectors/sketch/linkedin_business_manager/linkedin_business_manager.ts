
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LinkedinBusinessManagerCollector extends SketchCollector {

    static CONFIG = {
        id: "linkedin_business_manager",
        name: "LinkedIn Business Manager",
        description: "i18n.collectors.linkedin_business_manager.description",
        version: "0",
        website: "https://www.linkedin.com/businessmanager/accounts/6966019903610884097/billing/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1349408.jpg",
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
        entryUrl: "https://www.linkedin.com/businessmanager/accounts/6966019903610884097/billing/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LinkedinBusinessManagerCollector.CONFIG);
    }
}
