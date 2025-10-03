
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class OctoparseCollector extends SketchCollector {

    static CONFIG = {
        id: "octoparse",
        name: "Octoparse",
        description: "i18n.collectors.octoparse.description",
        version: "0",
        website: "https://www.octoparse.com/subscribe/transactions",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/416011.jpg",
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
        entryUrl: "https://www.octoparse.com/subscribe/transactions",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OctoparseCollector.CONFIG);
    }
}
