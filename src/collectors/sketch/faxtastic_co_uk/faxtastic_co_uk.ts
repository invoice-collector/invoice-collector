
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FaxtasticCoUkCollector extends SketchCollector {

    static CONFIG = {
        id: "faxtastic_co_uk",
        name: "Faxtastic.co.uk",
        description: "i18n.collectors.faxtastic_co_uk.description",
        version: "0",
        website: "https://www.faxtastic.co.uk/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/109338.jpg",
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
        entryUrl: "https://www.faxtastic.co.uk/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FaxtasticCoUkCollector.CONFIG);
    }
}
