
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class InterpolisNlCollector extends SketchCollector {

    static CONFIG = {
        id: "interpolis_nl",
        name: "interpolis.nl",
        description: "i18n.collectors.interpolis_nl.description",
        version: "0",
        website: "https://www.interpolis.nl/inloggen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/20431.jpg",
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
        loginUrl: "https://www.interpolis.nl/inloggen",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(InterpolisNlCollector.CONFIG);
    }
}
