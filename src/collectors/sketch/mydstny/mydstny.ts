
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MydstnyCollector extends SketchCollector {

    static CONFIG = {
        id: "mydstny",
        name: "Mydstny",
        description: "i18n.collectors.mydstny.description",
        version: "0",
        website: "https://bim-oto-it.extranet.mydstny.fr/Client/Factures",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4396436.jpg",
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
        loginUrl: "https://bim-oto-it.extranet.mydstny.fr/Client/Factures",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(MydstnyCollector.CONFIG);
    }
}
