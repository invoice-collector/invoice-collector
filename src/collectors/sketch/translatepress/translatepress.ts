
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TranslatepressCollector extends SketchCollector {

    static CONFIG = {
        id: "translatepress",
        name: "TranslatePress",
        description: "i18n.collectors.translatepress.description",
        version: "0",
        website: "https://translatepress.com/?edd_action=view_invoice&payment_id=1272812&invoice=edbcfe0c6953edc174ecdcc783c82093",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2192167.jpg",
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
        loginUrl: "https://translatepress.com/?edd_action=view_invoice&payment_id=1272812&invoice=edbcfe0c6953edc174ecdcc783c82093",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TranslatepressCollector.CONFIG);
    }
}
