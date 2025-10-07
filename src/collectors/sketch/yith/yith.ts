
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class YithCollector extends SketchCollector {

    static CONFIG = {
        id: "yith",
        name: "yith",
        description: "i18n.collectors.yith.description",
        version: "0",
        website: "https://yithemes.com/my-account/orders/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/73226.jpg",
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
        entryUrl: "https://yithemes.com/my-account/orders/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(YithCollector.CONFIG);
    }
}
