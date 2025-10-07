
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CapsulinkCollector extends SketchCollector {

    static CONFIG = {
        id: "capsulink",
        name: "Capsulink",
        description: "i18n.collectors.capsulink.description",
        version: "0",
        website: "https://www.capsulink.com/settings/subscription/history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778223.jpg",
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
        entryUrl: "https://www.capsulink.com/settings/subscription/history",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CapsulinkCollector.CONFIG);
    }
}
