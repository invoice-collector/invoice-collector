
import { SketchCollector } from '../../sketchCollector';

export class WixComCollector extends SketchCollector {

    static CONFIG = {
        id: "wix_com",
        name: "WIX.com",
        description: "i18n.collectors.wix_com.description",
        version: "0",
        website: "https://premium.wix.com/wix/api/mpContainerStaticController#/billings?referralAdditionalInfo=account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/542.jpg",
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
        entryUrl: "https://premium.wix.com/wix/api/mpContainerStaticController#/billings?referralAdditionalInfo=account",
    }

    constructor() {
        super(WixComCollector.CONFIG);
    }
}
