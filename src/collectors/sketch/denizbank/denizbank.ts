
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DenizbankCollector extends SketchCollector {

    static CONFIG = {
        id: "denizbank",
        name: "DenizBank",
        description: "i18n.collectors.denizbank.description",
        version: "0",
        website: "https://ebanking.denizbank.de/Default.aspx?sID=8631632",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/153913.jpg",
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
        loginUrl: "https://ebanking.denizbank.de/Default.aspx?sID=8631632",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DenizbankCollector.CONFIG);
    }
}
