
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AuchanTelecomCollector extends SketchCollector {

    static CONFIG = {
        id: "auchan_telecom",
        name: "Auchan Telecom",
        description: "i18n.collectors.auchan_telecom.description",
        version: "0",
        website: "https://www.auchantelecom.fr/fr/identification/espace-client.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/135078.jpg",
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
        entryUrl: "https://www.auchantelecom.fr/fr/identification/espace-client.html",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AuchanTelecomCollector.CONFIG);
    }
}
