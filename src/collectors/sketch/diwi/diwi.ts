
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DiwiCollector extends SketchCollector {

    static CONFIG = {
        id: "diwi",
        name: "DIWI",
        description: "i18n.collectors.diwi.description",
        version: "0",
        website: "https://diwi.mobilezone-handel.de/web/accounting/accounting-overview.xhtml?c=2-0",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1226956.jpg",
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
        loginUrl: "https://diwi.mobilezone-handel.de/web/accounting/accounting-overview.xhtml?c=2-0",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(DiwiCollector.CONFIG);
    }
}
