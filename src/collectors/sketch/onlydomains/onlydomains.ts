
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class OnlydomainsCollector extends SketchCollector {

    static CONFIG = {
        id: "onlydomains",
        name: "OnlyDomains",
        description: "i18n.collectors.onlydomains.description",
        version: "0",
        website: "https://www.onlydomains.com/account/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/20421.jpg",
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
        entryUrl: "https://www.onlydomains.com/account/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OnlydomainsCollector.CONFIG);
    }
}
