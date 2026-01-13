
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FigmaCollector extends SketchCollector {

    static CONFIG = {
        id: "figma",
        name: "Figma",
        description: "i18n.collectors.figma.description",
        version: "0",
        website: "https://www.figma.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/77708.jpg",
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
        loginUrl: "https://www.figma.com",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FigmaCollector.CONFIG);
    }
}
