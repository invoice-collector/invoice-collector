
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ScrybsCollector extends SketchCollector {

    static CONFIG = {
        id: "scrybs",
        name: "scrybs",
        description: "i18n.collectors.scrybs.description",
        version: "0",
        website: "https://scrybs.com/en/account/c/myorders/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/106316.jpg",
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
        entryUrl: "https://scrybs.com/en/account/c/myorders/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ScrybsCollector.CONFIG);
    }
}
