
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CliqerCollector extends SketchCollector {

    static CONFIG = {
        id: "cliqer",
        name: "CLIQER",
        description: "i18n.collectors.cliqer.description",
        version: "0",
        website: "https://cliqer.io/my-account/orders/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1360283.jpg",
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
        entryUrl: "https://cliqer.io/my-account/orders/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CliqerCollector.CONFIG);
    }
}
