
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class Monocure3dB2bCollector extends SketchCollector {

    static CONFIG = {
        id: "monocure_3d_b2b",
        name: "Monocure 3D (b2b)",
        description: "i18n.collectors.monocure_3d_b2b.description",
        version: "0",
        website: "https://b2b.monocure3d.com.au/my-account/orders/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1368543.jpg",
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
        loginUrl: "https://b2b.monocure3d.com.au/my-account/orders/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(Monocure3dB2bCollector.CONFIG);
    }
}
