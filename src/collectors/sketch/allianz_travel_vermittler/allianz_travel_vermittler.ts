
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AllianzTravelVermittlerCollector extends SketchCollector {

    static CONFIG = {
        id: "allianz_travel_vermittler",
        name: "Allianz Travel Vermittler",
        description: "i18n.collectors.allianz_travel_vermittler.description",
        version: "0",
        website: "https://www.allianztravel-agentmax.de/onePortalUI/#/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/618785.jpg",
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
        loginUrl: "https://www.allianztravel-agentmax.de/onePortalUI/#/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AllianzTravelVermittlerCollector.CONFIG);
    }
}
