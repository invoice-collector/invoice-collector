
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class OtaraGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "otara_gmbh",
        name: "Otara GmbH",
        description: "i18n.collectors.otara_gmbh.description",
        version: "0",
        website: "https://otara.de/account/orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3200765.jpg",
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
        loginUrl: "https://otara.de/account/orders",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(OtaraGmbhCollector.CONFIG);
    }
}
