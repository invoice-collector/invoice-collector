
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CodefreshCollector extends SketchCollector {

    static CONFIG = {
        id: "codefresh",
        name: "CODEFRESH",
        description: "i18n.collectors.codefresh.description",
        version: "0",
        website: "https://codefresh.io/dontknow",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/432661.jpg",
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
        entryUrl: "https://codefresh.io/dontknow",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CodefreshCollector.CONFIG);
    }
}
