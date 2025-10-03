
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class KashflowAccountingCollector extends SketchCollector {

    static CONFIG = {
        id: "kashflow_accounting",
        name: "KashFlow Accounting",
        description: "i18n.collectors.kashflow_accounting.description",
        version: "0",
        website: "https://securedwebapp.com/login.asp",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/6477.jpg",
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
        entryUrl: "https://securedwebapp.com/login.asp",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(KashflowAccountingCollector.CONFIG);
    }
}
