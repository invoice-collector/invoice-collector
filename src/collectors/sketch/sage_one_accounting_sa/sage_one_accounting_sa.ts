
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SageOneAccountingSaCollector extends SketchCollector {

    static CONFIG = {
        id: "sage_one_accounting_sa",
        name: "Sage One Accounting SA",
        description: "i18n.collectors.sage_one_accounting_sa.description",
        version: "0",
        website: "https://accounting.sageone.co.za/Landing/Default.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/405643.jpg",
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
        entryUrl: "https://accounting.sageone.co.za/Landing/Default.aspx",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SageOneAccountingSaCollector.CONFIG);
    }
}
