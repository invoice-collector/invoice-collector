
import { SketchCollector } from '../../sketchCollector';

export class IntegralSystemFrCollector extends SketchCollector {

    static CONFIG = {
        id: "integral_system_fr",
        name: "Integral System (.fr)",
        description: "i18n.collectors.integral_system_fr.description",
        version: "0",
        website: "https://www.integral-system.fr/fr_FR/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/648509.jpg",
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
        entryUrl: "https://www.integral-system.fr/fr_FR/",
    }

    constructor() {
        super(IntegralSystemFrCollector.CONFIG);
    }
}
