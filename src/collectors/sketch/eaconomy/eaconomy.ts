
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EaconomyCollector extends SketchCollector {

    static CONFIG = {
        id: "eaconomy",
        name: "eaconomy",
        description: "i18n.collectors.eaconomy.description",
        version: "0",
        website: "https://eaconomy.net/wp-admin/admin.php?page=user-report&tab=payout",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/210962.jpg",
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
        loginUrl: "https://eaconomy.net/wp-admin/admin.php?page=user-report&tab=payout",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(EaconomyCollector.CONFIG);
    }
}
