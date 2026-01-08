
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AtalandaCollector extends SketchCollector {

    static CONFIG = {
        id: "atalanda",
        name: "Atalanda",
        description: "i18n.collectors.atalanda.description",
        version: "0",
        website: "https://atalanda.com/nordfriesland/admin/platform_to_vendor_bills",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/762228.jpg",
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
        loginUrl: "https://atalanda.com/nordfriesland/admin/platform_to_vendor_bills",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AtalandaCollector.CONFIG);
    }
}
