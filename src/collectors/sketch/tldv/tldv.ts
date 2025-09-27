
import { SketchCollector } from '../../sketchCollector';

export class TldvCollector extends SketchCollector {

    static CONFIG = {
        id: "tldv",
        name: "tldv",
        description: "i18n.collectors.tldv.description",
        version: "0",
        website: "https://tldv.io/app/login?returnUrl=https%3A%2F%2Ftldv.io%2Fapp%2F%3F",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2553037.jpg",
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
        entryUrl: "https://tldv.io/app/login?returnUrl=https%3A%2F%2Ftldv.io%2Fapp%2F%3F",
    }

    constructor() {
        super(TldvCollector.CONFIG);
    }
}
