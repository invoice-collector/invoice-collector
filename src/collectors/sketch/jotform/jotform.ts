
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class JotformCollector extends SketchCollector {

    static CONFIG = {
        id: "jotform",
        name: "JotForm",
        description: "i18n.collectors.jotform.description",
        version: "0",
        website: "https://www.jotform.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/23407.jpg",
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
        entryUrl: "https://www.jotform.com/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(JotformCollector.CONFIG);
    }
}
