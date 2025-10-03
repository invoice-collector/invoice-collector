
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BloomonDeCollector extends SketchCollector {

    static CONFIG = {
        id: "bloomon_de",
        name: "bloomon (de)",
        description: "i18n.collectors.bloomon_de.description",
        version: "0",
        website: "https://www.bloomon.de/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/792839.jpg",
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
        entryUrl: "https://www.bloomon.de/login/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BloomonDeCollector.CONFIG);
    }
}
