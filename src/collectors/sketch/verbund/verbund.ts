
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class VerbundCollector extends SketchCollector {

    static CONFIG = {
        id: "verbund",
        name: "Verbund",
        description: "i18n.collectors.verbund.description",
        version: "0",
        website: "https://www.verbund.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/18855.jpg",
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
        entryUrl: "https://www.verbund.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VerbundCollector.CONFIG);
    }
}
