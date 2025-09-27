
import { SketchCollector } from '../../sketchCollector';

export class VectorizerCollector extends SketchCollector {

    static CONFIG = {
        id: "vectorizer",
        name: "Vectorizer",
        description: "i18n.collectors.vectorizer.description",
        version: "0",
        website: "https://de.cedarlakeventures.com/account/transactions",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2987729.jpg",
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
        entryUrl: "https://de.cedarlakeventures.com/account/transactions",
    }

    constructor() {
        super(VectorizerCollector.CONFIG);
    }
}
