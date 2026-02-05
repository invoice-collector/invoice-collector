
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class HenryScheinDentalDeCollector extends SketchCollector {

    static CONFIG = {
        id: "henry_schein_dental_de",
        name: "Henry Schein Dental (.de)",
        description: "i18n.collectors.henry_schein_dental_de.description",
        version: "0",
        website: "https://www.henryschein-dental.de/global/olp/onlineinvoice.aspx?",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2867218.jpg",
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
        loginUrl: "https://www.henryschein-dental.de/global/olp/onlineinvoice.aspx?",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(HenryScheinDentalDeCollector.CONFIG);
    }
}
