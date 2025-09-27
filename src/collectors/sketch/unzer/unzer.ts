
import { SketchCollector } from '../../sketchCollector';

export class UnzerCollector extends SketchCollector {

    static CONFIG = {
        id: "unzer",
        name: "Unzer",
        description: "i18n.collectors.unzer.description",
        version: "0",
        website: "https://insights.unzer.com/signin?",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/534353.jpg",
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
        entryUrl: "https://insights.unzer.com/signin?",
    }

    constructor() {
        super(UnzerCollector.CONFIG);
    }
}
