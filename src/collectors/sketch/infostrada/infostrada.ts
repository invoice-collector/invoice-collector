
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class InfostradaCollector extends SketchCollector {

    static CONFIG = {
        id: "infostrada",
        name: "Infostrada",
        description: "i18n.collectors.infostrada.description",
        version: "0",
        website: "http://www.infostrada.it",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9437.jpg",
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
        loginUrl: "http://www.infostrada.it",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(InfostradaCollector.CONFIG);
    }
}
