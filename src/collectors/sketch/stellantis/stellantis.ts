
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class StellantisCollector extends SketchCollector {

    static CONFIG = {
        id: "stellantis",
        name: "Stellantis",
        description: "i18n.collectors.stellantis.description",
        version: "0",
        website: "https://www.madd.stellantis.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2698771.jpg",
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
        entryUrl: "https://www.madd.stellantis.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StellantisCollector.CONFIG);
    }
}
