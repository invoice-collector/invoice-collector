
import { SketchCollector } from '../../sketchCollector';

export class SpreCollector extends SketchCollector {

    static CONFIG = {
        id: "spre",
        name: "SPRE",
        description: "i18n.collectors.spre.description",
        version: "0",
        website: "https://portail.spre.fr/invoice/index",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3197600.jpg",
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
        entryUrl: "https://portail.spre.fr/invoice/index",
    }

    constructor() {
        super(SpreCollector.CONFIG);
    }
}
