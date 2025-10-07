
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GranvaloraGmbhAndCoKgCollector extends SketchCollector {

    static CONFIG = {
        id: "granvalora_gmbh_and_co_kg",
        name: "GranValora GmbH & Co. KG",
        description: "i18n.collectors.granvalora_gmbh_and_co_kg.description",
        version: "0",
        website: "https://mein.granvalora.de/partner/refunds",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1307407.jpg",
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
        entryUrl: "https://mein.granvalora.de/partner/refunds",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GranvaloraGmbhAndCoKgCollector.CONFIG);
    }
}
