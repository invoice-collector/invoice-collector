
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BrodosNetCollector extends SketchCollector {

    static CONFIG = {
        id: "brodos_net",
        name: "Brodos NET",
        description: "i18n.collectors.brodos_net.description",
        version: "0",
        website: "https://www.brodos.net/index.php/mpath/svoucher_sales_salvoucher/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/79921.jpg",
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
        loginUrl: "https://www.brodos.net/index.php/mpath/svoucher_sales_salvoucher/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BrodosNetCollector.CONFIG);
    }
}
