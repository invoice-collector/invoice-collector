
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class JetiLineGlasfaserCollector extends SketchCollector {

    static CONFIG = {
        id: "jeti_line_glasfaser",
        name: "Jeti Line Glasfaser",
        description: "i18n.collectors.jeti_line_glasfaser.description",
        version: "0",
        website: "https://kundenportal.jeti-line.de/swtr-portal/csc/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2695827.jpg",
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
        loginUrl: "https://kundenportal.jeti-line.de/swtr-portal/csc/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(JetiLineGlasfaserCollector.CONFIG);
    }
}
