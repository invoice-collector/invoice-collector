
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DzbBankCollector extends SketchCollector {

    static CONFIG = {
        id: "dzb_bank",
        name: "DZB-Bank",
        description: "i18n.collectors.dzb_bank.description",
        version: "0",
        website: "https://portal.dzb-bank.de/dzb/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/203775.jpg",
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
        loginUrl: "https://portal.dzb-bank.de/dzb/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(DzbBankCollector.CONFIG);
    }
}
