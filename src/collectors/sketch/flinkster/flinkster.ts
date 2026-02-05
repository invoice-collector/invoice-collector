
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FlinksterCollector extends SketchCollector {

    static CONFIG = {
        id: "flinkster",
        name: "Flinkster",
        description: "i18n.collectors.flinkster.description",
        version: "0",
        website: "https://www.flinkster.de/kundenbuchung/process.php?proc=rechnung&f=3",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/10900.jpg",
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
        loginUrl: "https://www.flinkster.de/kundenbuchung/process.php?proc=rechnung&f=3",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(FlinksterCollector.CONFIG);
    }
}
