
import { SketchCollector } from '../../sketchCollector';

export class _99designsComCollector extends SketchCollector {

    static CONFIG = {
        id: "99designs_com",
        name: "99designs.com",
        description: "i18n.collectors.99designs_com.description",
        version: "0",
        website: "https://www.99designs.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/66505.jpg",
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
        entryUrl: "https://www.99designs.com/login",
    }

    constructor() {
        super(_99designsComCollector.CONFIG);
    }
}
