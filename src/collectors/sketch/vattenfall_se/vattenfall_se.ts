
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class VattenfallSeCollector extends SketchCollector {

    static CONFIG = {
        id: "vattenfall_se",
        name: "Vattenfall.se",
        description: "i18n.collectors.vattenfall_se.description",
        version: "0",
        website: "https://www.vattenfall.se/logga-in",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9574.jpg",
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
        entryUrl: "https://www.vattenfall.se/logga-in",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VattenfallSeCollector.CONFIG);
    }
}
