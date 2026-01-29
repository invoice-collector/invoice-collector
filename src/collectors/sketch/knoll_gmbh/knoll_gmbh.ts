
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class KnollGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "knoll_gmbh",
        name: "Knoll GmbH",
        description: "i18n.collectors.knoll_gmbh.description",
        version: "0",
        website: "https://shop.knoll.de/shop/my-account/bills",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1380033.jpg",
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
        loginUrl: "https://shop.knoll.de/shop/my-account/bills",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(KnollGmbhCollector.CONFIG);
    }
}
