
import { SketchCollector } from '../../sketchCollector';

export class TaxFishCollector extends SketchCollector {

    static CONFIG = {
        id: "tax_fish",
        name: "tax.fish",
        description: "i18n.collectors.tax_fish.description",
        version: "0",
        website: "https://online.tax.fish/Dokumente",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2310227.jpg",
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
        entryUrl: "https://online.tax.fish/Dokumente",
    }

    constructor() {
        super(TaxFishCollector.CONFIG);
    }
}
