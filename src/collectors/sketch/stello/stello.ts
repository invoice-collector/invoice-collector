
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class StelloCollector extends SketchCollector {

    static CONFIG = {
        id: "stello",
        name: "Stello",
        description: "i18n.collectors.stello.description",
        version: "0",
        website: "https://app.stello.eu/documents",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2027045.jpg",
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
        entryUrl: "https://app.stello.eu/documents",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StelloCollector.CONFIG);
    }
}
