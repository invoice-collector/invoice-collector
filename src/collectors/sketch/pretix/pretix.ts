
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PretixCollector extends SketchCollector {

    static CONFIG = {
        id: "pretix",
        name: "pretix",
        description: "i18n.collectors.pretix.description",
        version: "0",
        website: "https://pretix.eu/control/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/55228.jpg",
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
        entryUrl: "https://pretix.eu/control/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PretixCollector.CONFIG);
    }
}
