
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class StencilCollector extends SketchCollector {

    static CONFIG = {
        id: "stencil",
        name: "Stencil",
        description: "i18n.collectors.stencil.description",
        version: "0",
        website: "https://getstencil.com/app/login?curtain",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/69229.jpg",
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
        loginUrl: "https://getstencil.com/app/login?curtain",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StencilCollector.CONFIG);
    }
}
