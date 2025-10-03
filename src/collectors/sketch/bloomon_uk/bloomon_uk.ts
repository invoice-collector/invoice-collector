
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BloomonUkCollector extends SketchCollector {

    static CONFIG = {
        id: "bloomon_uk",
        name: "bloomon(uk)",
        description: "i18n.collectors.bloomon_uk.description",
        version: "0",
        website: "https://www.bloomon.co.uk/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/34533.jpg",
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
        entryUrl: "https://www.bloomon.co.uk/login/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BloomonUkCollector.CONFIG);
    }
}
