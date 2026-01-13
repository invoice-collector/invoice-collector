
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class UdacityCollector extends SketchCollector {

    static CONFIG = {
        id: "udacity",
        name: "Udacity",
        description: "i18n.collectors.udacity.description",
        version: "0",
        website: "https://auth.udacity.com/sign-in?next=https://classroom.udacity.com/authenticated",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/30543.jpg",
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
        loginUrl: "https://auth.udacity.com/sign-in?next=https://classroom.udacity.com/authenticated",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(UdacityCollector.CONFIG);
    }
}
