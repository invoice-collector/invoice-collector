
import { SketchCollector } from '../../sketchCollector';

export class ManxTelecomCollector extends SketchCollector {

    static CONFIG = {
        id: "manx_telecom",
        name: "Manx Telecom",
        description: "i18n.collectors.manx_telecom.description",
        version: "0",
        website: "https://mymt.manxtelecom.com/my-account#login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/403621.jpg",
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
        entryUrl: "https://mymt.manxtelecom.com/my-account#login",
    }

    constructor() {
        super(ManxTelecomCollector.CONFIG);
    }
}
