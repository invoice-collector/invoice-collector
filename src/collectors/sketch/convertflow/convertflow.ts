
import { SketchCollector } from '../../sketchCollector';

export class ConvertflowCollector extends SketchCollector {

    static CONFIG = {
        id: "convertflow",
        name: "ConvertFlow",
        description: "i18n.collectors.convertflow.description",
        version: "0",
        website: "https://app.convertflow.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/743921.jpg",
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
        entryUrl: "https://app.convertflow.com/login",
    }

    constructor() {
        super(ConvertflowCollector.CONFIG);
    }
}
