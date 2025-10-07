
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class VisualWebsiteOptimizerCollector extends SketchCollector {

    static CONFIG = {
        id: "visual_website_optimizer",
        name: "Visual Website Optimizer",
        description: "i18n.collectors.visual_website_optimizer.description",
        version: "0",
        website: "https://app.vwo.com/#/settings/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8724.jpg",
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
        entryUrl: "https://app.vwo.com/#/settings/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VisualWebsiteOptimizerCollector.CONFIG);
    }
}
