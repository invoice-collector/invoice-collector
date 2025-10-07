
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CobotCollector extends SketchCollector {

    static CONFIG = {
        id: "cobot",
        name: "Cobot",
        description: "i18n.collectors.cobot.description",
        version: "0",
        website: "https://www.cobot.me/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9520.jpg",
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
        entryUrl: "https://www.cobot.me/account",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CobotCollector.CONFIG);
    }
}
