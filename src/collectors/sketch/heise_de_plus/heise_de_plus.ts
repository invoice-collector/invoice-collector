
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class HeiseDePlusCollector extends SketchCollector {

    static CONFIG = {
        id: "heise_de_plus",
        name: "heise.de plus",
        description: "i18n.collectors.heise_de_plus.description",
        version: "0",
        website: "https://www.heise.de/sso/registration/add_subscriber_id",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/119864.jpg",
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
        loginUrl: "https://www.heise.de/sso/registration/add_subscriber_id",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(HeiseDePlusCollector.CONFIG);
    }
}
