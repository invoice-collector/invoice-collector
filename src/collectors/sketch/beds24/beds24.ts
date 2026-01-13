
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class Beds24Collector extends SketchCollector {

    static CONFIG = {
        id: "beds24",
        name: "Beds24",
        description: "i18n.collectors.beds24.description",
        version: "0",
        website: "https://www.beds24.com/control2.php?pagetype=accountinvoice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/64951.jpg",
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
        loginUrl: "https://www.beds24.com/control2.php?pagetype=accountinvoice",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(Beds24Collector.CONFIG);
    }
}
