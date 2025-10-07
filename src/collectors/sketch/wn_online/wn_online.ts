
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WnOnlineCollector extends SketchCollector {

    static CONFIG = {
        id: "wn_online",
        name: "wn-online",
        description: "i18n.collectors.wn_online.description",
        version: "0",
        website: "https://my.wn-onlineservice.de/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/532761.jpg",
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
        entryUrl: "https://my.wn-onlineservice.de/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WnOnlineCollector.CONFIG);
    }
}
