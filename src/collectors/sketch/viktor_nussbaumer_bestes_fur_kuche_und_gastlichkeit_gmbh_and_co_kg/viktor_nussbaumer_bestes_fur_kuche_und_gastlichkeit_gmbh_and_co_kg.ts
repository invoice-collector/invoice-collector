
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ViktorNussbaumerBestesFurKucheUndGastlichkeitGmbhAndCoKgCollector extends SketchCollector {

    static CONFIG = {
        id: "viktor_nussbaumer_bestes_fur_kuche_und_gastlichkeit_gmbh_and_co_kg",
        name: "Viktor Nussbaumer Bestes fur Kuche und Gastlichkeit GmbH & Co.KG",
        description: "i18n.collectors.viktor_nussbaumer_bestes_fur_kuche_und_gastlichkeit_gmbh_and_co_kg.description",
        version: "0",
        website: "https://nussbaumer.servicebund.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1183319.jpg",
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
        loginUrl: "https://nussbaumer.servicebund.com/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ViktorNussbaumerBestesFurKucheUndGastlichkeitGmbhAndCoKgCollector.CONFIG);
    }
}
