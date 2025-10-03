
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AislerNetCollector extends SketchCollector {

    static CONFIG = {
        id: "aisler_net",
        name: "aisler.net",
        description: "i18n.collectors.aisler_net.description",
        version: "0",
        website: "https://aisler.net/juwi/orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/246192.jpg",
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
        entryUrl: "https://aisler.net/juwi/orders",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AislerNetCollector.CONFIG);
    }
}
