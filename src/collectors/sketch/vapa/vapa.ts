
import { SketchCollector } from '../../sketchCollector';

export class VapaCollector extends SketchCollector {

    static CONFIG = {
        id: "vapa",
        name: "vapa",
        description: "i18n.collectors.vapa.description",
        version: "0",
        website: "https://login.vapa.ai/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1355650.jpg",
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
        entryUrl: "https://login.vapa.ai/login",
    }

    constructor() {
        super(VapaCollector.CONFIG);
    }
}
