
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TucalendiComCollector extends SketchCollector {

    static CONFIG = {
        id: "tucalendi_com",
        name: "tucalendi.com",
        description: "i18n.collectors.tucalendi_com.description",
        version: "0",
        website: "https://account.tucalendi.com/account/plan_settings",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2130780.jpg",
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
        entryUrl: "https://account.tucalendi.com/account/plan_settings",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TucalendiComCollector.CONFIG);
    }
}
