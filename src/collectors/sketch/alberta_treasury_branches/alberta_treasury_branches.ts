
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AlbertaTreasuryBranchesCollector extends SketchCollector {

    static CONFIG = {
        id: "alberta_treasury_branches",
        name: "Alberta Treasury Branches",
        description: "i18n.collectors.alberta_treasury_branches.description",
        version: "0",
        website: "https://www.atb.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/74889.jpg",
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
        entryUrl: "https://www.atb.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AlbertaTreasuryBranchesCollector.CONFIG);
    }
}
