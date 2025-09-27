
import { SketchCollector } from '../../sketchCollector';

export class GengoCollector extends SketchCollector {

    static CONFIG = {
        id: "gengo",
        name: "Gengo",
        description: "i18n.collectors.gengo.description",
        version: "0",
        website: "https://gengo.com/c/order/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/236112.jpg",
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
        entryUrl: "https://gengo.com/c/order/",
    }

    constructor() {
        super(GengoCollector.CONFIG);
    }
}
