
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GrammarlyCollector extends SketchCollector {

    static CONFIG = {
        id: "grammarly",
        name: "grammarly",
        description: "i18n.collectors.grammarly.description",
        version: "0",
        website: "https://account.grammarly.com/admin/subscription",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/21710.jpg",
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
        entryUrl: "https://account.grammarly.com/admin/subscription",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GrammarlyCollector.CONFIG);
    }
}
