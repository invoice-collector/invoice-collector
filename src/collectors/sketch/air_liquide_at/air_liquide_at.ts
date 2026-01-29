
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AirLiquideAtCollector extends SketchCollector {

    static CONFIG = {
        id: "air_liquide_at",
        name: "Air Liquide AT",
        description: "i18n.collectors.air_liquide_at.description",
        version: "0",
        website: "https://portal.airliquide.at/portal/secure/abfragen/airliquide",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2387801.jpg",
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
        loginUrl: "https://portal.airliquide.at/portal/secure/abfragen/airliquide",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(AirLiquideAtCollector.CONFIG);
    }
}
