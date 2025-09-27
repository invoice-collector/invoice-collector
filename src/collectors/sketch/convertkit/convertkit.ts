
import { SketchCollector } from '../../sketchCollector';

export class ConvertkitCollector extends SketchCollector {

    static CONFIG = {
        id: "convertkit",
        name: "ConvertKit",
        description: "i18n.collectors.convertkit.description",
        version: "0",
        website: "https://app.convertkit.com/users/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/18804.jpg",
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
        entryUrl: "https://app.convertkit.com/users/login",
    }

    constructor() {
        super(ConvertkitCollector.CONFIG);
    }
}
