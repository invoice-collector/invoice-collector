
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class UseberryCollector extends SketchCollector {

    static CONFIG = {
        id: "useberry",
        name: "useberry",
        description: "i18n.collectors.useberry.description",
        version: "0",
        website: "https://www.useberry.com/dashboard/account/billing/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/153917.jpg",
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
        entryUrl: "https://www.useberry.com/dashboard/account/billing/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(UseberryCollector.CONFIG);
    }
}
