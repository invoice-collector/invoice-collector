
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class VismeCollector extends SketchCollector {

    static CONFIG = {
        id: "visme",
        name: "Visme",
        description: "i18n.collectors.visme.description",
        version: "0",
        website: "https://dashboard.visme.co/billing-history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/97576.jpg",
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
        entryUrl: "https://dashboard.visme.co/billing-history",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VismeCollector.CONFIG);
    }
}
