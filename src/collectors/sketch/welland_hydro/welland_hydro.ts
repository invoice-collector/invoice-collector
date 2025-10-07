
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WellandHydroCollector extends SketchCollector {

    static CONFIG = {
        id: "welland_hydro",
        name: "Welland Hydro",
        description: "i18n.collectors.welland_hydro.description",
        version: "0",
        website: "http://www.wellandhydro.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8548.jpg",
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
        entryUrl: "http://www.wellandhydro.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WellandHydroCollector.CONFIG);
    }
}
