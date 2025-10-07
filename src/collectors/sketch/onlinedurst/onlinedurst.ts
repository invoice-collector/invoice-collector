
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class OnlinedurstCollector extends SketchCollector {

    static CONFIG = {
        id: "onlinedurst",
        name: "Onlinedurst",
        description: "i18n.collectors.onlinedurst.description",
        version: "0",
        website: "https://onlinedurst.de/account/orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2131273.jpg",
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
        entryUrl: "https://onlinedurst.de/account/orders",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OnlinedurstCollector.CONFIG);
    }
}
