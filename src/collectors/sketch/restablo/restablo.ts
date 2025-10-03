
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class RestabloCollector extends SketchCollector {

    static CONFIG = {
        id: "restablo",
        name: "restablo",
        description: "i18n.collectors.restablo.description",
        version: "0",
        website: "https://restaurant.restablo.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/880048.jpg",
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
        entryUrl: "https://restaurant.restablo.de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RestabloCollector.CONFIG);
    }
}
