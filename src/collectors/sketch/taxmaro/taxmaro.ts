
import { SketchCollector } from '../../sketchCollector';

export class TaxmaroCollector extends SketchCollector {

    static CONFIG = {
        id: "taxmaro",
        name: "Taxmaro",
        description: "i18n.collectors.taxmaro.description",
        version: "0",
        website: "https://portal.taxmaro.com/#/login//",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/492192.jpg",
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
        entryUrl: "https://portal.taxmaro.com/#/login//",
    }

    constructor() {
        super(TaxmaroCollector.CONFIG);
    }
}
