
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CornelsenVerlagCollector extends SketchCollector {

    static CONFIG = {
        id: "cornelsen_verlag",
        name: "Cornelsen Verlag",
        description: "i18n.collectors.cornelsen_verlag.description",
        version: "0",
        website: "https://www.cvk-online.de/rechnungen.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1278785.jpg",
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
        entryUrl: "https://www.cvk-online.de/rechnungen.php",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CornelsenVerlagCollector.CONFIG);
    }
}
