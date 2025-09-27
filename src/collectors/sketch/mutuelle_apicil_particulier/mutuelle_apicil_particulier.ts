
import { SketchCollector } from '../../sketchCollector';

export class MutuelleApicilParticulierCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_apicil_particulier",
        name: "Mutuelle Apicil - particulier",
        description: "i18n.collectors.mutuelle_apicil_particulier.description",
        version: "0",
        website: "https://www.apicil.com/espace-particulier",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/125685.jpg",
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
        entryUrl: "https://www.apicil.com/espace-particulier",
    }

    constructor() {
        super(MutuelleApicilParticulierCollector.CONFIG);
    }
}
