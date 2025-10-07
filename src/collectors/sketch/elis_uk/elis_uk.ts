
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ElisUkCollector extends SketchCollector {

    static CONFIG = {
        id: "elis_uk",
        name: "ELIS UK",
        description: "i18n.collectors.elis_uk.description",
        version: "0",
        website: "https://myelis.elis.com/#/external/activity/invoice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/777334.jpg",
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
        entryUrl: "https://myelis.elis.com/#/external/activity/invoice",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ElisUkCollector.CONFIG);
    }
}
