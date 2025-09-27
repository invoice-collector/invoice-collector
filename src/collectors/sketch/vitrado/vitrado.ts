
import { SketchCollector } from '../../sketchCollector';

export class VitradoCollector extends SketchCollector {

    static CONFIG = {
        id: "vitrado",
        name: "Vitrado",
        description: "i18n.collectors.vitrado.description",
        version: "0",
        website: "https://app.vitrado.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/532740.jpg",
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
        entryUrl: "https://app.vitrado.de",
    }

    constructor() {
        super(VitradoCollector.CONFIG);
    }
}
