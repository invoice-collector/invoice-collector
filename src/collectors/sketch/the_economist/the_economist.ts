
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TheEconomistCollector extends SketchCollector {

    static CONFIG = {
        id: "the_economist",
        name: "The Economist",
        description: "i18n.collectors.the_economist.description",
        version: "0",
        website: "https://www.economist.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/624394.jpg",
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
        entryUrl: "https://www.economist.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TheEconomistCollector.CONFIG);
    }
}
