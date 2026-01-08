
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BlockchainBitcoinaverageCollector extends SketchCollector {

    static CONFIG = {
        id: "blockchain_bitcoinaverage",
        name: "Blockchain - bitcoinaverage",
        description: "i18n.collectors.blockchain_bitcoinaverage.description",
        version: "0",
        website: "https://pro.bitcoinaverage.com/pages/auth/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2131408.jpg",
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
        loginUrl: "https://pro.bitcoinaverage.com/pages/auth/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BlockchainBitcoinaverageCollector.CONFIG);
    }
}
