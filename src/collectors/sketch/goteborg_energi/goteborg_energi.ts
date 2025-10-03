
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GoteborgEnergiCollector extends SketchCollector {

    static CONFIG = {
        id: "goteborg_energi",
        name: "Goteborg Energi",
        description: "i18n.collectors.goteborg_energi.description",
        version: "0",
        website: "https://www.goteborgenergi.se/Kundservice/Logga_in",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9346.jpg",
        type: CollectorType.SKETCH,
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
        entryUrl: "https://www.goteborgenergi.se/Kundservice/Logga_in",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GoteborgEnergiCollector.CONFIG);
    }
}
