
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BeeproCollector extends SketchCollector {

    static CONFIG = {
        id: "beepro",
        name: "BeePro",
        description: "i18n.collectors.beepro.description",
        version: "0",
        website: "https://pro.beefree.io/subscription",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/148963.jpg",
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
        entryUrl: "https://pro.beefree.io/subscription",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BeeproCollector.CONFIG);
    }
}
