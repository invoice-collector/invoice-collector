
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AgglopoleProvenceEauCollector extends SketchCollector {

    static CONFIG = {
        id: "agglopole_provence_eau",
        name: "Agglopole Provence Eau",
        description: "i18n.collectors.agglopole_provence_eau.description",
        version: "0",
        website: "https://espaceclients-ape.eauxdemarseille.fr/#/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/837748.jpg",
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
        loginUrl: "https://espaceclients-ape.eauxdemarseille.fr/#/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(AgglopoleProvenceEauCollector.CONFIG);
    }
}
