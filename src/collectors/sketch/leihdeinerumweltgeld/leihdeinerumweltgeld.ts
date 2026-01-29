
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class LeihdeinerumweltgeldCollector extends SketchCollector {

    static CONFIG = {
        id: "leihdeinerumweltgeld",
        name: "LeihDeinerUmweltGeld",
        description: "i18n.collectors.leihdeinerumweltgeld.description",
        version: "0",
        website: "https://invest.leihdeinerumweltgeld.de/account/tax_documents",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/121253.jpg",
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
        loginUrl: "https://invest.leihdeinerumweltgeld.de/account/tax_documents",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(LeihdeinerumweltgeldCollector.CONFIG);
    }
}
