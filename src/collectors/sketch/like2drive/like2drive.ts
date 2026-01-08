
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class Like2driveCollector extends SketchCollector {

    static CONFIG = {
        id: "like2drive",
        name: "Like2drive",
        description: "i18n.collectors.like2drive.description",
        version: "0",
        website: "https://cd.fleetpool.de/invoice-b2b/2055740/7d9b98edb6f5736e8371791f6a6bd76cbccf5cb6d053d13c3337d7a2cf3c3aa4",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2420011.jpg",
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
        loginUrl: "https://cd.fleetpool.de/invoice-b2b/2055740/7d9b98edb6f5736e8371791f6a6bd76cbccf5cb6d053d13c3337d7a2cf3c3aa4",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(Like2driveCollector.CONFIG);
    }
}
