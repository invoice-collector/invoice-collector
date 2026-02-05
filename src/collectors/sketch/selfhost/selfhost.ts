
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SelfhostCollector extends SketchCollector {

    static CONFIG = {
        id: "selfhost",
        name: "Selfhost",
        description: "i18n.collectors.selfhost.description",
        version: "0",
        website: "https://secure.selfhost.de/cgi-bin/selfhost?p=account&cat=rechnung",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/6856.jpg",
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
        loginUrl: "https://secure.selfhost.de/cgi-bin/selfhost?p=account&cat=rechnung",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(SelfhostCollector.CONFIG);
    }
}
