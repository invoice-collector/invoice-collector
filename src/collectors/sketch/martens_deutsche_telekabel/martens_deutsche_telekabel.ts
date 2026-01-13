
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MartensDeutscheTelekabelCollector extends SketchCollector {

    static CONFIG = {
        id: "martens_deutsche_telekabel",
        name: "Martens Deutsche Telekabel",
        description: "i18n.collectors.martens_deutsche_telekabel.description",
        version: "0",
        website: "https://service.pyur.net/kundenportal/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9472.jpg",
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
        loginUrl: "https://service.pyur.net/kundenportal/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MartensDeutscheTelekabelCollector.CONFIG);
    }
}
