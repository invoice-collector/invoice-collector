
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DanskSupermarkedCollector extends SketchCollector {

    static CONFIG = {
        id: "dansk_supermarked",
        name: "Dansk Supermarked",
        description: "i18n.collectors.dansk_supermarked.description",
        version: "0",
        website: "https://dansksupermarked.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/21972.jpg",
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
        loginUrl: "https://dansksupermarked.com",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(DanskSupermarkedCollector.CONFIG);
    }
}
