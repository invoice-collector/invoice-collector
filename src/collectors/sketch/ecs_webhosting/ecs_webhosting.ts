
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EcsWebhostingCollector extends SketchCollector {

    static CONFIG = {
        id: "ecs_webhosting",
        name: "ECS Webhosting",
        description: "i18n.collectors.ecs_webhosting.description",
        version: "0",
        website: "https://admin.fritz.gmbh/?lang=de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/15358.jpg",
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
        loginUrl: "https://admin.fritz.gmbh/?lang=de",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(EcsWebhostingCollector.CONFIG);
    }
}
