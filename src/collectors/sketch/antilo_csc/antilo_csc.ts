
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AntiloCscCollector extends SketchCollector {

    static CONFIG = {
        id: "antilo_csc",
        name: "Antilo CSC",
        description: "i18n.collectors.antilo_csc.description",
        version: "0",
        website: "https://csc.antilo.de/cgi-bin/uncgi/main.cgi?session=X5kfy1ndAT4AAGWZE-oAAAAA",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/543150.jpg",
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
        loginUrl: "https://csc.antilo.de/cgi-bin/uncgi/main.cgi?session=X5kfy1ndAT4AAGWZE-oAAAAA",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AntiloCscCollector.CONFIG);
    }
}
