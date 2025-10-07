
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HpsmartCollector extends SketchCollector {

    static CONFIG = {
        id: "hpsmart",
        name: "hpsmart",
        description: "i18n.collectors.hpsmart.description",
        version: "0",
        website: "https://www.hpsmart.com/de/de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1314677.jpg",
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
        entryUrl: "https://www.hpsmart.com/de/de",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HpsmartCollector.CONFIG);
    }
}
