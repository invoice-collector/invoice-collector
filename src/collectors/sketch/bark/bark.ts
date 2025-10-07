
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BarkCollector extends SketchCollector {

    static CONFIG = {
        id: "bark",
        name: "Bark",
        description: "i18n.collectors.bark.description",
        version: "0",
        website: "https://www.bark.com/de/de/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1439578.jpg",
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
        entryUrl: "https://www.bark.com/de/de/login/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BarkCollector.CONFIG);
    }
}
