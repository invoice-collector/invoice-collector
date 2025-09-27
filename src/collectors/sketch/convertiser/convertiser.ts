
import { SketchCollector } from '../../sketchCollector';

export class ConvertiserCollector extends SketchCollector {

    static CONFIG = {
        id: "convertiser",
        name: "Convertiser",
        description: "i18n.collectors.convertiser.description",
        version: "0",
        website: "https://app.convertiser.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/502432.jpg",
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
        entryUrl: "https://app.convertiser.com/login",
    }

    constructor() {
        super(ConvertiserCollector.CONFIG);
    }
}
