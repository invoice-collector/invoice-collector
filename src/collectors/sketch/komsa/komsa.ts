
import { SketchCollector } from '../../sketchCollector';

export class KomsaCollector extends SketchCollector {

    static CONFIG = {
        id: "komsa",
        name: "Komsa",
        description: "i18n.collectors.komsa.description",
        version: "0",
        website: "https://karlo.de/Login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/221835.jpg",
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
        entryUrl: "https://karlo.de/Login",
    }

    constructor() {
        super(KomsaCollector.CONFIG);
    }
}
