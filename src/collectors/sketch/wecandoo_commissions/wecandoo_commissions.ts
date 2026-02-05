
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class WecandooCommissionsCollector extends SketchCollector {

    static CONFIG = {
        id: "wecandoo_commissions",
        name: "Wecandoo Commissions",
        description: "i18n.collectors.wecandoo_commissions.description",
        version: "0",
        website: "https://wecandoo.fr/espace-artisan/facturation/commissions",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2007427.jpg",
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
        loginUrl: "https://wecandoo.fr/espace-artisan/facturation/commissions",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(WecandooCommissionsCollector.CONFIG);
    }
}
