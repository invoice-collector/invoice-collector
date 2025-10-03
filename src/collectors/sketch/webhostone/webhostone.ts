
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WebhostoneCollector extends SketchCollector {

    static CONFIG = {
        id: "webhostone",
        name: "WebhostOne",
        description: "i18n.collectors.webhostone.description",
        version: "0",
        website: "https://kcc.webhostone.de/kcc/index/index",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3406.jpg",
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
        entryUrl: "https://kcc.webhostone.de/kcc/index/index",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WebhostoneCollector.CONFIG);
    }
}
