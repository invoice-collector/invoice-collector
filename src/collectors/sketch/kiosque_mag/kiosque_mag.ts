
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class KiosqueMagCollector extends SketchCollector {

    static CONFIG = {
        id: "kiosque_mag",
        name: "Kiosque Mag",
        description: "i18n.collectors.kiosque_mag.description",
        version: "0",
        website: "https://www.kiosquemag.com/mon-espace/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/120416.jpg",
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
        loginUrl: "https://www.kiosquemag.com/mon-espace/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(KiosqueMagCollector.CONFIG);
    }
}
