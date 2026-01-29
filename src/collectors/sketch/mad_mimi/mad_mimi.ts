
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MadMimiCollector extends SketchCollector {

    static CONFIG = {
        id: "mad_mimi",
        name: "Mad Mimi",
        description: "i18n.collectors.mad_mimi.description",
        version: "0",
        website: "https://madmimi.com/user/edit?account_info_tabs=account_info_receipts",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/89375.jpg",
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
        loginUrl: "https://madmimi.com/user/edit?account_info_tabs=account_info_receipts",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(MadMimiCollector.CONFIG);
    }
}
