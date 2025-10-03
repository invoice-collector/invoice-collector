
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AraAltstoffRecyclingAustriaAgCollector extends SketchCollector {

    static CONFIG = {
        id: "ara_altstoff_recycling_austria_ag",
        name: "ARA - Altstoff Recycling Austria AG",
        description: "i18n.collectors.ara_altstoff_recycling_austria_ag.description",
        version: "0",
        website: "https://online.ara.at/login.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/132502.jpg",
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
        entryUrl: "https://online.ara.at/login.php",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AraAltstoffRecyclingAustriaAgCollector.CONFIG);
    }
}
