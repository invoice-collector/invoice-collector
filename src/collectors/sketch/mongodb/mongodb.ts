
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MongodbCollector extends SketchCollector {

    static CONFIG = {
        id: "mongodb",
        name: "MongoDB",
        description: "i18n.collectors.mongodb.description",
        version: "0",
        website: "https://cloud.mongodb.com/user?nds=true",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/30029.jpg",
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
        loginUrl: "https://cloud.mongodb.com/user?nds=true",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(MongodbCollector.CONFIG);
    }
}
