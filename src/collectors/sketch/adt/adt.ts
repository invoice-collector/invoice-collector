
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AdtCollector extends SketchCollector {

    static CONFIG = {
        id: "adt",
        name: "ADT",
        description: "i18n.collectors.adt.description",
        version: "0",
        website: "https://www.adt.com/customer-service",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8514.jpg",
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
        entryUrl: "https://www.adt.com/customer-service",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AdtCollector.CONFIG);
    }
}
