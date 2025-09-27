
import { SketchCollector } from '../../sketchCollector';

export class UizardCollector extends SketchCollector {

    static CONFIG = {
        id: "uizard",
        name: "Uizard",
        description: "i18n.collectors.uizard.description",
        version: "0",
        website: "https://billing.stripe.com/p/session/live_YWNjdF8xRmJPOWxGcjNNTlRrVEU5LF9RUGI4SnlVbGdQcTNaQmx2ckpBR3VHZjVFU3VROU1X0100e4bCDO0y",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2985682.jpg",
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
        entryUrl: "https://billing.stripe.com/p/session/live_YWNjdF8xRmJPOWxGcjNNTlRrVEU5LF9RUGI4SnlVbGdQcTNaQmx2ckpBR3VHZjVFU3VROU1X0100e4bCDO0y",
    }

    constructor() {
        super(UizardCollector.CONFIG);
    }
}
