
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class LorchGruppeCollector extends SketchCollector {

    static CONFIG = {
        id: "lorch_gruppe",
        name: "Lorch-gruppe",
        description: "i18n.collectors.lorch_gruppe.description",
        version: "0",
        website: "https://shop.lorch-kg.de/home/vma/b2b/init.do",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/246198.jpg",
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
        loginUrl: "https://shop.lorch-kg.de/home/vma/b2b/init.do",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(LorchGruppeCollector.CONFIG);
    }
}
