
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TraumFerienwohnungenVermieterLoginCollector extends SketchCollector {

    static CONFIG = {
        id: "traum_ferienwohnungen_vermieter_login",
        name: "Traum-Ferienwohnungen Vermieter-Login",
        description: "i18n.collectors.traum_ferienwohnungen_vermieter_login.description",
        version: "0",
        website: "http://www.traum-ferienwohnungen.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8205.jpg",
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
        loginUrl: "http://www.traum-ferienwohnungen.de",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(TraumFerienwohnungenVermieterLoginCollector.CONFIG);
    }
}
