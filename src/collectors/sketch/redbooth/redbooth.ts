
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class RedboothCollector extends SketchCollector {

    static CONFIG = {
        id: "redbooth",
        name: "Redbooth",
        description: "i18n.collectors.redbooth.description",
        version: "0",
        website: "https://redbooth.com/a/#!/plans/568660/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/202495.jpg",
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
        entryUrl: "https://redbooth.com/a/#!/plans/568660/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RedboothCollector.CONFIG);
    }
}
