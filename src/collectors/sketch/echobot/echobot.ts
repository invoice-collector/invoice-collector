
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EchobotCollector extends SketchCollector {

    static CONFIG = {
        id: "echobot",
        name: "Echobot",
        description: "i18n.collectors.echobot.description",
        version: "0",
        website: "https://login.echobot.de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/53921.jpg",
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
        entryUrl: "https://login.echobot.de/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EchobotCollector.CONFIG);
    }
}
