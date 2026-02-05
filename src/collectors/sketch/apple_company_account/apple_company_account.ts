
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AppleCompanyAccountCollector extends SketchCollector {

    static CONFIG = {
        id: "apple_company_account",
        name: "Apple Company Account",
        description: "i18n.collectors.apple_company_account.description",
        version: "0",
        website: "https://idmsa.apple.com/IDMSWebAuth/signin?appIdKey=1ea5417fc564f453ff00699cf6d7f2b7c1dc865f65b9f6566cfc7f3ad9b595c5&path=/asb2b/init.do%3Fsegment%3DSBPRO-SMB&language=US-EN&segment=SBPRO-SMB",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/779115.jpg",
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
        loginUrl: "https://idmsa.apple.com/IDMSWebAuth/signin?appIdKey=1ea5417fc564f453ff00699cf6d7f2b7c1dc865f65b9f6566cfc7f3ad9b595c5&path=/asb2b/init.do%3Fsegment%3DSBPRO-SMB&language=US-EN&segment=SBPRO-SMB",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(AppleCompanyAccountCollector.CONFIG);
    }
}
