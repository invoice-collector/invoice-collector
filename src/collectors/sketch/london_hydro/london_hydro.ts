
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LondonHydroCollector extends SketchCollector {

    static CONFIG = {
        id: "london_hydro",
        name: "London Hydro",
        description: "i18n.collectors.london_hydro.description",
        version: "0",
        website: "https://www.londonhydro.com/site/#!/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/403622.jpg",
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
        entryUrl: "https://www.londonhydro.com/site/#!/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LondonHydroCollector.CONFIG);
    }
}
