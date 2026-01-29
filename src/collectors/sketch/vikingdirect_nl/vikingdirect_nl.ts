
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class VikingdirectNlCollector extends SketchCollector {

    static CONFIG = {
        id: "vikingdirect_nl",
        name: "Vikingdirect.nl",
        description: "i18n.collectors.vikingdirect_nl.description",
        version: "0",
        website: "https://www.vikingdirect.nl/nl/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32717.jpg",
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
        loginUrl: "https://www.vikingdirect.nl/nl/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(VikingdirectNlCollector.CONFIG);
    }
}
