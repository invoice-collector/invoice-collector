
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class _3dkBerlinCollector extends SketchCollector {

    static CONFIG = {
        id: "3dk_berlin",
        name: "3dk.berlin",
        description: "i18n.collectors.3dk_berlin.description",
        version: "0",
        website: "https://3dk.berlin/verwaltung",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/751003.jpg",
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
        loginUrl: "https://3dk.berlin/verwaltung",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(_3dkBerlinCollector.CONFIG);
    }
}
