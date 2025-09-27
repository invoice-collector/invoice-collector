
import { SketchCollector } from '../../sketchCollector';

export class CemexGoCollector extends SketchCollector {

    static CONFIG = {
        id: "cemex_go",
        name: "Cemex GO",
        description: "i18n.collectors.cemex_go.description",
        version: "0",
        website: "https://www.cemexgo.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/640622.jpg",
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
        entryUrl: "https://www.cemexgo.com/login",
    }

    constructor() {
        super(CemexGoCollector.CONFIG);
    }
}
