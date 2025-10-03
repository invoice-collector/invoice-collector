
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SwbCollector extends SketchCollector {

    static CONFIG = {
        id: "swb",
        name: "swb",
        description: "i18n.collectors.swb.description",
        version: "0",
        website: "https://gk-selfservice.swb.de/portal/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1863131.jpg",
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
        entryUrl: "https://gk-selfservice.swb.de/portal/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SwbCollector.CONFIG);
    }
}
