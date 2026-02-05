
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TravelcardNlCollector extends SketchCollector {

    static CONFIG = {
        id: "travelcard_nl",
        name: "travelcard.nl",
        description: "i18n.collectors.travelcard_nl.description",
        version: "0",
        website: "https://portal.travelcard.eu/cas/login?locale=nl&service=https://portal.travelcard.eu/portal/initiatessologin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32382.jpg",
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
        loginUrl: "https://portal.travelcard.eu/cas/login?locale=nl&service=https://portal.travelcard.eu/portal/initiatessologin",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(TravelcardNlCollector.CONFIG);
    }
}
