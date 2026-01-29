
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BereikIoCollector extends SketchCollector {

    static CONFIG = {
        id: "bereik_io",
        name: "bereik.io",
        description: "i18n.collectors.bereik_io.description",
        version: "0",
        website: "https://mijn.bereik.io/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32705.jpg",
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
        loginUrl: "https://mijn.bereik.io/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(BereikIoCollector.CONFIG);
    }
}
