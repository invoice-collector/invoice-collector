
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class StadtwerkeDorfenCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtwerke_dorfen",
        name: "Stadtwerke Dorfen",
        description: "i18n.collectors.stadtwerke_dorfen.description",
        version: "0",
        website: "http://www.stadtwerke-dorfen.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9267.jpg",
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
        loginUrl: "http://www.stadtwerke-dorfen.de",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(StadtwerkeDorfenCollector.CONFIG);
    }
}
