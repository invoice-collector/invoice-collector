
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class OrthoDepotCollector extends SketchCollector {

    static CONFIG = {
        id: "ortho_depot",
        name: "Ortho Depot",
        description: "i18n.collectors.ortho_depot.description",
        version: "0",
        website: "https://www.orthodepot.de/account.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2445882.jpg",
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
        entryUrl: "https://www.orthodepot.de/account.php",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OrthoDepotCollector.CONFIG);
    }
}
