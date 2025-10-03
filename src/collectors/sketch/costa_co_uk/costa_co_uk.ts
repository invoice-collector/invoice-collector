
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CostaCoUkCollector extends SketchCollector {

    static CONFIG = {
        id: "costa_co_uk",
        name: "Costa.co.uk",
        description: "i18n.collectors.costa_co_uk.description",
        version: "0",
        website: "https://www.costa.co.uk/coffee-club/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/21904.jpg",
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
        entryUrl: "https://www.costa.co.uk/coffee-club/login/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CostaCoUkCollector.CONFIG);
    }
}
