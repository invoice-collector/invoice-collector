
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SugarCrmCollector extends SketchCollector {

    static CONFIG = {
        id: "sugar_crm",
        name: "Sugar CRM",
        description: "i18n.collectors.sugar_crm.description",
        version: "0",
        website: "https://auth.sugarcrm.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8633.jpg",
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
        entryUrl: "https://auth.sugarcrm.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SugarCrmCollector.CONFIG);
    }
}
