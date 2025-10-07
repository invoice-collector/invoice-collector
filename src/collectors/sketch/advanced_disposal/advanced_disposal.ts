
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AdvancedDisposalCollector extends SketchCollector {

    static CONFIG = {
        id: "advanced_disposal",
        name: "Advanced Disposal",
        description: "i18n.collectors.advanced_disposal.description",
        version: "0",
        website: "https://secure8.i-doxs.net/AdvancedDisposal/SignIn.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/88495.jpg",
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
        entryUrl: "https://secure8.i-doxs.net/AdvancedDisposal/SignIn.aspx",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AdvancedDisposalCollector.CONFIG);
    }
}
