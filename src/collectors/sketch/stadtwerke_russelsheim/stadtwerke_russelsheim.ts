
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class StadtwerkeRusselsheimCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtwerke_russelsheim",
        name: "Stadtwerke Russelsheim",
        description: "i18n.collectors.stadtwerke_russelsheim.description",
        version: "0",
        website: "https://privatkundenportal.net/stadtwerke-ruesselsheim/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9469.jpg",
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
        loginUrl: "https://privatkundenportal.net/stadtwerke-ruesselsheim/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(StadtwerkeRusselsheimCollector.CONFIG);
    }
}
