
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SokaBauCollector extends SketchCollector {

    static CONFIG = {
        id: "soka_bau",
        name: "SOKA BAU",
        description: "i18n.collectors.soka_bau.description",
        version: "0",
        website: "https://service.soka-bau.de/css-webapp/pages/postfach.sbo",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/654787.jpg",
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
        loginUrl: "https://service.soka-bau.de/css-webapp/pages/postfach.sbo",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SokaBauCollector.CONFIG);
    }
}
