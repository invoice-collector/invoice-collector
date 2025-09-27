
import { SketchCollector } from '../../sketchCollector';

export class NaturaMedicatrixCollector extends SketchCollector {

    static CONFIG = {
        id: "natura_medicatrix",
        name: "Natura Medicatrix",
        description: "i18n.collectors.natura_medicatrix.description",
        version: "0",
        website: "https://www.naturamedicatrix.fr/en/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/122539.jpg",
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
        entryUrl: "https://www.naturamedicatrix.fr/en/",
    }

    constructor() {
        super(NaturaMedicatrixCollector.CONFIG);
    }
}
