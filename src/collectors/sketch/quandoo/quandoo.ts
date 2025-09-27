
import { SketchCollector } from '../../sketchCollector';

export class QuandooCollector extends SketchCollector {

    static CONFIG = {
        id: "quandoo",
        name: "Quandoo",
        description: "i18n.collectors.quandoo.description",
        version: "0",
        website: "https://admin.quandoo.com/auth/signin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4178834.jpg",
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
        entryUrl: "https://admin.quandoo.com/auth/signin",
    }

    constructor() {
        super(QuandooCollector.CONFIG);
    }
}
