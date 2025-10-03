
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GasagCollector extends SketchCollector {

    static CONFIG = {
        id: "gasag",
        name: "GASAG",
        description: "i18n.collectors.gasag.description",
        version: "0",
        website: "https://www.gasag.de/meine-gasag/api/b2c/postbox/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/14821.jpg",
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
        entryUrl: "https://www.gasag.de/meine-gasag/api/b2c/postbox/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GasagCollector.CONFIG);
    }
}
