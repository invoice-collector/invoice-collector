
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DegeniaCollector extends SketchCollector {

    static CONFIG = {
        id: "degenia",
        name: "degenia",
        description: "i18n.collectors.degenia.description",
        version: "0",
        website: "https://degenia.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8664.jpg",
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
        entryUrl: "https://degenia.de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DegeniaCollector.CONFIG);
    }
}
