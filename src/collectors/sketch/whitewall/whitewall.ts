
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WhitewallCollector extends SketchCollector {

    static CONFIG = {
        id: "whitewall",
        name: "WhiteWall",
        description: "i18n.collectors.whitewall.description",
        version: "0",
        website: "https://www.whitewall.com/de/user/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/14299.jpg",
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
        entryUrl: "https://www.whitewall.com/de/user/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WhitewallCollector.CONFIG);
    }
}
