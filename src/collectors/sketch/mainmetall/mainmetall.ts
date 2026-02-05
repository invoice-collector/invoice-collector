
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MainmetallCollector extends SketchCollector {

    static CONFIG = {
        id: "mainmetall",
        name: "Mainmetall",
        description: "i18n.collectors.mainmetall.description",
        version: "0",
        website: "https://portal.mainmetall.de/hilfe/schnittstellen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/427329.jpg",
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
        loginUrl: "https://portal.mainmetall.de/hilfe/schnittstellen",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(MainmetallCollector.CONFIG);
    }
}
