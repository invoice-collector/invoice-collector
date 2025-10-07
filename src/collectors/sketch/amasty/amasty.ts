
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AmastyCollector extends SketchCollector {

    static CONFIG = {
        id: "amasty",
        name: "Amasty",
        description: "i18n.collectors.amasty.description",
        version: "0",
        website: "https://amasty.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/779133.jpg",
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
        entryUrl: "https://amasty.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AmastyCollector.CONFIG);
    }
}
