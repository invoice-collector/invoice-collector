
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class HexonetOtAndECollector extends SketchCollector {

    static CONFIG = {
        id: "hexonet_ot_and_e",
        name: "Hexonet OT&E",
        description: "i18n.collectors.hexonet_ot_and_e.description",
        version: "0",
        website: "https://account-ote.hexonet.net/token=f7batt1c/#/invoicelist",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/773311.jpg",
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
        loginUrl: "https://account-ote.hexonet.net/token=f7batt1c/#/invoicelist",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(HexonetOtAndECollector.CONFIG);
    }
}
