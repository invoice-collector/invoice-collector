
import { SketchCollector } from '../../sketchCollector';

export class SugalAlimentosSaCollector extends SketchCollector {

    static CONFIG = {
        id: "sugal_alimentos_sa",
        name: "Sugal Alimentos SA",
        description: "i18n.collectors.sugal_alimentos_sa.description",
        version: "0",
        website: "https://einvoice.generixpt.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1801075.jpg",
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
        entryUrl: "https://einvoice.generixpt.com",
    }

    constructor() {
        super(SugalAlimentosSaCollector.CONFIG);
    }
}
