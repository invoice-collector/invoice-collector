
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AllgeierExpertsCollector extends SketchCollector {

    static CONFIG = {
        id: "allgeier_experts",
        name: "Allgeier Experts",
        description: "i18n.collectors.allgeier_experts.description",
        version: "0",
        website: "https://portal.allgeier-experts.com/my/documents/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/773785.jpg",
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
        entryUrl: "https://portal.allgeier-experts.com/my/documents/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AllgeierExpertsCollector.CONFIG);
    }
}
