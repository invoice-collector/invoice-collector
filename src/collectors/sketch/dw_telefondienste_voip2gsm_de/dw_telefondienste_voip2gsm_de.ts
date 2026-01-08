
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DwTelefondiensteVoip2gsmDeCollector extends SketchCollector {

    static CONFIG = {
        id: "dw_telefondienste_voip2gsm_de",
        name: "DW-TelefonDienste (voip2gsm.de)",
        description: "i18n.collectors.dw_telefondienste_voip2gsm_de.description",
        version: "0",
        website: "https://config.voip2gsm.eu",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/70689.jpg",
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
        loginUrl: "https://config.voip2gsm.eu",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DwTelefondiensteVoip2gsmDeCollector.CONFIG);
    }
}
