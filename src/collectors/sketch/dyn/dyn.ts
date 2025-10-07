
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DynCollector extends SketchCollector {

    static CONFIG = {
        id: "dyn",
        name: "Dyn",
        description: "i18n.collectors.dyn.description",
        version: "0",
        website: "https://account.dyn.com/entrance/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/6275.jpg",
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
        entryUrl: "https://account.dyn.com/entrance/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DynCollector.CONFIG);
    }
}
