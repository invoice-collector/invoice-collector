
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SklumCollector extends SketchCollector {

    static CONFIG = {
        id: "sklum",
        name: "Sklum",
        description: "i18n.collectors.sklum.description",
        version: "0",
        website: "https://www.sklum.com/fr/historial-de-pedidos",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1895674.jpg",
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
        loginUrl: "https://www.sklum.com/fr/historial-de-pedidos",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(SklumCollector.CONFIG);
    }
}
