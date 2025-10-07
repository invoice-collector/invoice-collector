
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class RyanairCollector extends SketchCollector {

    static CONFIG = {
        id: "ryanair",
        name: "Ryanair",
        description: "i18n.collectors.ryanair.description",
        version: "0",
        website: "https://www.ryanair.com/de/de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1184.jpg",
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
        entryUrl: "https://www.ryanair.com/de/de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RyanairCollector.CONFIG);
    }
}
