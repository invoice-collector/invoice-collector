
import { SketchCollector } from '../../sketchCollector';

export class SslmateCollector extends SketchCollector {

    static CONFIG = {
        id: "sslmate",
        name: "SSLMate",
        description: "i18n.collectors.sslmate.description",
        version: "0",
        website: "https://sslmate.com/dashboard?login=1",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8806.jpg",
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
        entryUrl: "https://sslmate.com/dashboard?login=1",
    }

    constructor() {
        super(SslmateCollector.CONFIG);
    }
}
