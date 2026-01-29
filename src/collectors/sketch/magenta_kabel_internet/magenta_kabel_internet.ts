
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MagentaKabelInternetCollector extends SketchCollector {

    static CONFIG = {
        id: "magenta_kabel_internet",
        name: "Magenta Kabel/Internet",
        description: "i18n.collectors.magenta_kabel_internet.description",
        version: "0",
        website: "https://www.magenta.at/mein-magenta-kabel/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1336059.jpg",
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
        loginUrl: "https://www.magenta.at/mein-magenta-kabel/invoices",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(MagentaKabelInternetCollector.CONFIG);
    }
}
