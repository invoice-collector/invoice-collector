
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ChekinCollector extends SketchCollector {

    static CONFIG = {
        id: "chekin",
        name: "Chekin",
        description: "i18n.collectors.chekin.description",
        version: "0",
        website: "https://dashboard.chekin.com/account/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2730169.jpg",
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
        entryUrl: "https://dashboard.chekin.com/account/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ChekinCollector.CONFIG);
    }
}
