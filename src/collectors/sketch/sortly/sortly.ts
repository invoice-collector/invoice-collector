
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SortlyCollector extends SketchCollector {

    static CONFIG = {
        id: "sortly",
        name: "Sortly",
        description: "i18n.collectors.sortly.description",
        version: "0",
        website: "https://pro.sortly.com/billing-info",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/148959.jpg",
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
        entryUrl: "https://pro.sortly.com/billing-info",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SortlyCollector.CONFIG);
    }
}
