
import { SketchCollector } from '../../sketchCollector';

export class SuitedashComCollector extends SketchCollector {

    static CONFIG = {
        id: "suitedash_com",
        name: "suitedash.com",
        description: "i18n.collectors.suitedash_com.description",
        version: "0",
        website: "https://app.suitedash.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/391899.jpg",
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
        entryUrl: "https://app.suitedash.com/",
    }

    constructor() {
        super(SuitedashComCollector.CONFIG);
    }
}
