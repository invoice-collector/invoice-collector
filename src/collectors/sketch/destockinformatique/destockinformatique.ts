import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DestockInformatiqueCollector extends SketchCollector {

    static CONFIG = {
        id: "destockinformatique",
        name: "Destock Informatique",
        description: "i18n.collectors.destockinformatique.description",
        version: "0",
        website: "https://www.destock-informatique.com",
        logo: "https://media.destock-informatique.com/img/destock-informatique-logo-1577650106.jpg",
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
        loginUrl: "https://www.destock-informatique.com/connexion?back=my-account",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DestockInformatiqueCollector.CONFIG);
    }
}
