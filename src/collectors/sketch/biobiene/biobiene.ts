
import { SketchCollector } from '../../sketchCollector';

export class BiobieneCollector extends SketchCollector {

    static CONFIG = {
        id: "biobiene",
        name: "Biobiene",
        description: "i18n.collectors.biobiene.description",
        version: "0",
        website: "https://www.biobiene.com/account/orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4355621.jpg",
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
        entryUrl: "https://www.biobiene.com/account/orders",
    }

    constructor() {
        super(BiobieneCollector.CONFIG);
    }
}
