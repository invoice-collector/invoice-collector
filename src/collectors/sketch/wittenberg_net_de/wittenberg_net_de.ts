
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WittenbergNetDeCollector extends SketchCollector {

    static CONFIG = {
        id: "wittenberg_net_de",
        name: "Wittenberg-net.de",
        description: "i18n.collectors.wittenberg_net_de.description",
        version: "0",
        website: "http://www.wittenberg-net.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9198.jpg",
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
        entryUrl: "http://www.wittenberg-net.de",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WittenbergNetDeCollector.CONFIG);
    }
}
