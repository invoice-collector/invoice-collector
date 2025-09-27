
import { SketchCollector } from '../../sketchCollector';

export class IntegraphoneCollector extends SketchCollector {

    static CONFIG = {
        id: "integraphone",
        name: "Integraphone",
        description: "i18n.collectors.integraphone.description",
        version: "0",
        website: "https://integraphone.facturationtelecom.fr/FinalUserAccount/factures.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2635010.jpg",
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
        entryUrl: "https://integraphone.facturationtelecom.fr/FinalUserAccount/factures.php",
    }

    constructor() {
        super(IntegraphoneCollector.CONFIG);
    }
}
