import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MgfCollector extends SketchCollector {

    static CONFIG = {
        id: "mgf_fr",
        name: "MGF",
        description: "i18n.collectors.mgf_fr.description",
        version: "0",
        website: "https://www.mgf-info.fr",
        logo: "https://www.mgf-info.fr/pub/media/logo/websites/1/MGF_133x60.png",
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
        loginUrl: "https://www.mgf-info.fr/customer/account/login/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(MgfCollector.CONFIG);
    }
}
