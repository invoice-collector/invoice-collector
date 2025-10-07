
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AktivbankFactoringCollector extends SketchCollector {

    static CONFIG = {
        id: "aktivbank_factoring",
        name: "Aktivbank Factoring",
        description: "i18n.collectors.aktivbank_factoring.description",
        version: "0",
        website: "https://online.aktivbank-factoring.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/397961.jpg",
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
        entryUrl: "https://online.aktivbank-factoring.de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AktivbankFactoringCollector.CONFIG);
    }
}
