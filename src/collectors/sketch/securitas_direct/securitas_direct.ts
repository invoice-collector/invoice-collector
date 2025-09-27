
import { SketchCollector } from '../../sketchCollector';

export class SecuritasDirectCollector extends SketchCollector {

    static CONFIG = {
        id: "securitas_direct",
        name: "Securitas Direct",
        description: "i18n.collectors.securitas_direct.description",
        version: "0",
        website: "https://customers.securitasdirect.fr/fr/bills",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/73830.jpg",
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
        entryUrl: "https://customers.securitasdirect.fr/fr/bills",
    }

    constructor() {
        super(SecuritasDirectCollector.CONFIG);
    }
}
