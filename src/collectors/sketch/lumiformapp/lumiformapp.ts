
import { SketchCollector } from '../../sketchCollector';

export class LumiformappCollector extends SketchCollector {

    static CONFIG = {
        id: "lumiformapp",
        name: "lumiformapp",
        description: "i18n.collectors.lumiformapp.description",
        version: "0",
        website: "https://admin.lumiformapp.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1966445.jpg",
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
        entryUrl: "https://admin.lumiformapp.com",
    }

    constructor() {
        super(LumiformappCollector.CONFIG);
    }
}
