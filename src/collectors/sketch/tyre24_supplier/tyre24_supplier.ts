
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class Tyre24SupplierCollector extends SketchCollector {

    static CONFIG = {
        id: "tyre24_supplier",
        name: "Tyre24 Supplier",
        description: "i18n.collectors.tyre24_supplier.description",
        version: "0",
        website: "https://supplier.alzura.com/de/de/user/login/page/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1121179.jpg",
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
        loginUrl: "https://supplier.alzura.com/de/de/user/login/page/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(Tyre24SupplierCollector.CONFIG);
    }
}
