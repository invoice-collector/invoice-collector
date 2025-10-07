
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PrincipalCollector extends SketchCollector {

    static CONFIG = {
        id: "principal",
        name: "Principal",
        description: "i18n.collectors.principal.description",
        version: "0",
        website: "https://employers-groupbenefits.principal.com/GroupBenefitsEmployerUI/memberInformation/1171505/10001/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2732575.jpg",
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
        entryUrl: "https://employers-groupbenefits.principal.com/GroupBenefitsEmployerUI/memberInformation/1171505/10001/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PrincipalCollector.CONFIG);
    }
}
