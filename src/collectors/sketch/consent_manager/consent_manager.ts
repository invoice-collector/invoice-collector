
import { SketchCollector } from '../../sketchCollector';

export class ConsentManagerCollector extends SketchCollector {

    static CONFIG = {
        id: "consent_manager",
        name: "Consent Manager",
        description: "i18n.collectors.consent_manager.description",
        version: "0",
        website: "https://www.consentmanager.de/client/account.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/772756.jpg",
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
        entryUrl: "https://www.consentmanager.de/client/account.php",
    }

    constructor() {
        super(ConsentManagerCollector.CONFIG);
    }
}
