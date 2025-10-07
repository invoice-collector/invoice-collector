
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GenderApiCollector extends SketchCollector {

    static CONFIG = {
        id: "gender_api",
        name: "Gender-API",
        description: "i18n.collectors.gender_api.description",
        version: "0",
        website: "https://gender-api.com/de/account/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1764000.jpg",
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
        entryUrl: "https://gender-api.com/de/account/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GenderApiCollector.CONFIG);
    }
}
