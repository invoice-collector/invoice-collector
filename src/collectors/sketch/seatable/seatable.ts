
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SeatableCollector extends SketchCollector {

    static CONFIG = {
        id: "seatable",
        name: "SeaTable",
        description: "i18n.collectors.seatable.description",
        version: "0",
        website: "https://cloud.seatable.io/org/chargebee/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1234136.jpg",
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
        loginUrl: "https://cloud.seatable.io/org/chargebee/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(SeatableCollector.CONFIG);
    }
}
