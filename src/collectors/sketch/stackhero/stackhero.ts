
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class StackheroCollector extends SketchCollector {

    static CONFIG = {
        id: "stackhero",
        name: "Stackhero",
        description: "i18n.collectors.stackhero.description",
        version: "0",
        website: "https://dashboard.stackhero.io/account/organizations/org-cnrq47/billing/invoices/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1723351.jpg",
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
        entryUrl: "https://dashboard.stackhero.io/account/organizations/org-cnrq47/billing/invoices/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StackheroCollector.CONFIG);
    }
}
