
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class OttoFrickeAndCoKgCollector extends SketchCollector {

    static CONFIG = {
        id: "otto_fricke_and_co_kg",
        name: "Otto Fricke & Co. KG",
        description: "i18n.collectors.otto_fricke_and_co_kg.description",
        version: "0",
        website: "https://portal.fricke-oil.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2168749.jpg",
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
        loginUrl: "https://portal.fricke-oil.de",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(OttoFrickeAndCoKgCollector.CONFIG);
    }
}
