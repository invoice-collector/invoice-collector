
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class RocketLinkCollector extends SketchCollector {

    static CONFIG = {
        id: "rocket_link",
        name: "Rocket Link",
        description: "i18n.collectors.rocket_link.description",
        version: "0",
        website: "https://www.rocketlinks.net/wallet/deposits",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2449939.jpg",
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
        entryUrl: "https://www.rocketlinks.net/wallet/deposits",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RocketLinkCollector.CONFIG);
    }
}
