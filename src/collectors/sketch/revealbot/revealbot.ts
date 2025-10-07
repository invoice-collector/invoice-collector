
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class RevealbotCollector extends SketchCollector {

    static CONFIG = {
        id: "revealbot",
        name: "revealbot",
        description: "i18n.collectors.revealbot.description",
        version: "0",
        website: "https://revealbot.com/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/902518.jpg",
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
        entryUrl: "https://revealbot.com/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RevealbotCollector.CONFIG);
    }
}
