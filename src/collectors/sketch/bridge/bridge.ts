
import { SketchCollector } from '../../sketchCollector';

export class BridgeCollector extends SketchCollector {

    static CONFIG = {
        id: "bridge",
        name: "Bridge",
        description: "i18n.collectors.bridge.description",
        version: "0",
        website: "https://dashboard.bridgeapi.io/signin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4199187.jpg",
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
        entryUrl: "https://dashboard.bridgeapi.io/signin",
    }

    constructor() {
        super(BridgeCollector.CONFIG);
    }
}
