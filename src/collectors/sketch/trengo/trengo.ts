
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TrengoCollector extends SketchCollector {

    static CONFIG = {
        id: "trengo",
        name: "trengo",
        description: "i18n.collectors.trengo.description",
        version: "0",
        website: "https://app.trengo.com/admin/subscription_settings",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2284746.jpg",
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
        entryUrl: "https://app.trengo.com/admin/subscription_settings",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TrengoCollector.CONFIG);
    }
}
