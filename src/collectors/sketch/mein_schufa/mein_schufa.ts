
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MeinSchufaCollector extends SketchCollector {

    static CONFIG = {
        id: "mein_schufa",
        name: "Mein Schufa",
        description: "i18n.collectors.mein_schufa.description",
        version: "0",
        website: "https://www.meineschufa.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/226714.jpg",
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
        loginUrl: "https://www.meineschufa.de",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(MeinSchufaCollector.CONFIG);
    }
}
