
import { SketchCollector } from '../../sketchCollector';

export class AmahousseComCollector extends SketchCollector {

    static CONFIG = {
        id: "amahousse_com",
        name: "Amahousse.com",
        description: "i18n.collectors.amahousse_com.description",
        version: "0",
        website: "https://www.amahousse.com/connexion?back=my-account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/116056.jpg",
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
        entryUrl: "https://www.amahousse.com/connexion?back=my-account",
    }

    constructor() {
        super(AmahousseComCollector.CONFIG);
    }
}
