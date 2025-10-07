
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WashworldCollector extends SketchCollector {

    static CONFIG = {
        id: "washworld",
        name: "WashWorld",
        description: "i18n.collectors.washworld.description",
        version: "0",
        website: "https://washworld.de/my-account/payment",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4479262.jpg",
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
        entryUrl: "https://washworld.de/my-account/payment",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WashworldCollector.CONFIG);
    }
}
