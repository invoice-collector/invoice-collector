
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class H5pCollector extends SketchCollector {

    static CONFIG = {
        id: "h5p",
        name: "h5p",
        description: "i18n.collectors.h5p.description",
        version: "0",
        website: "https://h5p.com/login/introduce",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2854475.jpg",
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
        loginUrl: "https://h5p.com/login/introduce",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(H5pCollector.CONFIG);
    }
}
