
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BloomonBeCollector extends SketchCollector {

    static CONFIG = {
        id: "bloomon_be",
        name: "bloomon(be)",
        description: "i18n.collectors.bloomon_be.description",
        version: "0",
        website: "https://www.bloomon.be/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/526230.jpg",
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
        entryUrl: "https://www.bloomon.be/login/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BloomonBeCollector.CONFIG);
    }
}
