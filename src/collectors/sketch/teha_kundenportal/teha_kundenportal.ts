
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TehaKundenportalCollector extends SketchCollector {

    static CONFIG = {
        id: "teha_kundenportal",
        name: "TEHA - Kundenportal",
        description: "i18n.collectors.teha_kundenportal.description",
        version: "0",
        website: "https://login.teha-wd.de/accounting/overview",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4642477.jpg",
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
        entryUrl: "https://login.teha-wd.de/accounting/overview",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TehaKundenportalCollector.CONFIG);
    }
}
