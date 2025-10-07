
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class VeliaNetCollector extends SketchCollector {

    static CONFIG = {
        id: "velia_net",
        name: "velia.net",
        description: "i18n.collectors.velia_net.description",
        version: "0",
        website: "https://www.velia.net/account/invoice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2110707.jpg",
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
        entryUrl: "https://www.velia.net/account/invoice",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VeliaNetCollector.CONFIG);
    }
}
