
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MtkomDeCollector extends SketchCollector {

    static CONFIG = {
        id: "mtkom_de",
        name: "MTKom.de",
        description: "i18n.collectors.mtkom_de.description",
        version: "0",
        website: "https://www.titan-networks.de/cic/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9263.jpg",
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
        loginUrl: "https://www.titan-networks.de/cic/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MtkomDeCollector.CONFIG);
    }
}
