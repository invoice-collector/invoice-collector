
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FleetcorCollector extends SketchCollector {

    static CONFIG = {
        id: "fleetcor",
        name: "Fleetcor",
        description: "i18n.collectors.fleetcor.description",
        version: "0",
        website: "https://selfserve.fleetcor.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/14249.jpg",
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
        entryUrl: "https://selfserve.fleetcor.de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FleetcorCollector.CONFIG);
    }
}
