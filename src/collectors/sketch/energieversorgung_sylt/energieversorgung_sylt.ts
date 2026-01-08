
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EnergieversorgungSyltCollector extends SketchCollector {

    static CONFIG = {
        id: "energieversorgung_sylt",
        name: "Energieversorgung Sylt",
        description: "i18n.collectors.energieversorgung_sylt.description",
        version: "0",
        website: "https://kundencenter.energieversorgung-sylt.de/csit/action/csShowInvoices?formReset.x=true",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/392730.jpg",
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
        loginUrl: "https://kundencenter.energieversorgung-sylt.de/csit/action/csShowInvoices?formReset.x=true",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EnergieversorgungSyltCollector.CONFIG);
    }
}
