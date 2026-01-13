
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class WerLiefertWasCollector extends SketchCollector {

    static CONFIG = {
        id: "wer_liefert_was",
        name: "Wer liefert was",
        description: "i18n.collectors.wer_liefert_was.description",
        version: "0",
        website: "https://www.wlw.de/de/mein-konto/uebersicht/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/54751.jpg",
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
        loginUrl: "https://www.wlw.de/de/mein-konto/uebersicht/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WerLiefertWasCollector.CONFIG);
    }
}
