
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class OnlineNetCollector extends SketchCollector {

    static CONFIG = {
        id: "online_net",
        name: "online.net",
        description: "i18n.collectors.online_net.description",
        version: "0",
        website: "http://www.online.net",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8752.jpg",
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
        entryUrl: "http://www.online.net",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OnlineNetCollector.CONFIG);
    }
}
