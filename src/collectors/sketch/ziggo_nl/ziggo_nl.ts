
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ZiggoNlCollector extends SketchCollector {

    static CONFIG = {
        id: "ziggo_nl",
        name: "Ziggo.nl",
        description: "i18n.collectors.ziggo_nl.description",
        version: "0",
        website: "https://www.ziggo.nl/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/20472.jpg",
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
        loginUrl: "https://www.ziggo.nl/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(ZiggoNlCollector.CONFIG);
    }
}
