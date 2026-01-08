
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class RemediaHomoeopathieCollector extends SketchCollector {

    static CONFIG = {
        id: "remedia_homoeopathie",
        name: "Remedia-Homoeopathie",
        description: "i18n.collectors.remedia_homoeopathie.description",
        version: "0",
        website: "https://remedia-homoeopathie.de/konto/meine-bestellungen/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4220603.jpg",
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
        loginUrl: "https://remedia-homoeopathie.de/konto/meine-bestellungen/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RemediaHomoeopathieCollector.CONFIG);
    }
}
