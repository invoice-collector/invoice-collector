
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CpxResearchCollector extends SketchCollector {

    static CONFIG = {
        id: "cpx_research",
        name: "CPX Research",
        description: "i18n.collectors.cpx_research.description",
        version: "0",
        website: "https://publisher.cpx-research.com/index.php?page=statistics_account_balance",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2715262.jpg",
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
        entryUrl: "https://publisher.cpx-research.com/index.php?page=statistics_account_balance",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CpxResearchCollector.CONFIG);
    }
}
