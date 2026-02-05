
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class Print24ComAtCollector extends SketchCollector {

    static CONFIG = {
        id: "print24_com_at",
        name: "print24.com - at",
        description: "i18n.collectors.print24_com_at.description",
        version: "0",
        website: "https://print24.com/at/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/38430.jpg",
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
        loginUrl: "https://print24.com/at/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(Print24ComAtCollector.CONFIG);
    }
}
