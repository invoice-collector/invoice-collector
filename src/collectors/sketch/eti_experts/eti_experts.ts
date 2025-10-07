
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EtiExpertsCollector extends SketchCollector {

    static CONFIG = {
        id: "eti_experts",
        name: "ETI experts",
        description: "i18n.collectors.eti_experts.description",
        version: "0",
        website: "https://login.eti-experts.de/portal/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2515315.jpg",
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
        entryUrl: "https://login.eti-experts.de/portal/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EtiExpertsCollector.CONFIG);
    }
}
