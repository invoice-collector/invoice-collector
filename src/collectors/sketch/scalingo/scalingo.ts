
import { SketchCollector } from '../../sketchCollector';

export class ScalingoCollector extends SketchCollector {

    static CONFIG = {
        id: "scalingo",
        name: "Scalingo",
        description: "i18n.collectors.scalingo.description",
        version: "0",
        website: "https://my.scalingo.com/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/58983.jpg",
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
        entryUrl: "https://my.scalingo.com/billing",
    }

    constructor() {
        super(ScalingoCollector.CONFIG);
    }
}
