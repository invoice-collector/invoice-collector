
import { SketchCollector } from '../../sketchCollector';

export class SimilarwebCollector extends SketchCollector {

    static CONFIG = {
        id: "similarweb",
        name: "Similarweb",
        description: "i18n.collectors.similarweb.description",
        version: "0",
        website: "https://account.similarweb.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7130.jpg",
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
        entryUrl: "https://account.similarweb.com/login",
    }

    constructor() {
        super(SimilarwebCollector.CONFIG);
    }
}
