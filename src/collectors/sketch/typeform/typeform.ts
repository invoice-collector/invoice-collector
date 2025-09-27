
import { SketchCollector } from '../../sketchCollector';

export class TypeformCollector extends SketchCollector {

    static CONFIG = {
        id: "typeform",
        name: "Typeform",
        description: "i18n.collectors.typeform.description",
        version: "0",
        website: "https://admin.typeform.com/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7298.jpg",
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
        entryUrl: "https://admin.typeform.com/account",
    }

    constructor() {
        super(TypeformCollector.CONFIG);
    }
}
