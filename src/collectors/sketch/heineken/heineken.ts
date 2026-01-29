
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class HeinekenCollector extends SketchCollector {

    static CONFIG = {
        id: "heineken",
        name: "Heineken",
        description: "i18n.collectors.heineken.description",
        version: "0",
        website: "https://direct.heineken.co.uk/huk/en/GBP/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/398585.jpg",
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
        loginUrl: "https://direct.heineken.co.uk/huk/en/GBP/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(HeinekenCollector.CONFIG);
    }
}
