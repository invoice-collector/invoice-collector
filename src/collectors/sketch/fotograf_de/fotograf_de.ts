
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FotografDeCollector extends SketchCollector {

    static CONFIG = {
        id: "fotograf_de",
        name: "fotograf.de",
        description: "i18n.collectors.fotograf_de.description",
        version: "0",
        website: "https://app.fotograf.de/config/index_invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9307.jpg",
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
        entryUrl: "https://app.fotograf.de/config/index_invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FotografDeCollector.CONFIG);
    }
}
