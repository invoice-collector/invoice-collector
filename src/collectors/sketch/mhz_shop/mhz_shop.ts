
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MhzShopCollector extends SketchCollector {

    static CONFIG = {
        id: "mhz_shop",
        name: "MHz Shop",
        description: "i18n.collectors.mhz_shop.description",
        version: "0",
        website: "https://mhz.pickmill.com/extranet/factures?s=1&t=c4ce0247d24b9891f75ac2aee7cd1215386d99b3&redirected=1",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/940364.jpg",
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
        loginUrl: "https://mhz.pickmill.com/extranet/factures?s=1&t=c4ce0247d24b9891f75ac2aee7cd1215386d99b3&redirected=1",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MhzShopCollector.CONFIG);
    }
}
