
import { SketchCollector } from '../../sketchCollector';

export class EcsWebhostingCollector extends SketchCollector {

    static CONFIG = {
        id: "ecs_webhosting",
        name: "ECS Webhosting",
        description: "i18n.collectors.ecs_webhosting.description",
        version: "0",
        website: "https://admin.fritz.gmbh/?lang=de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/15358.jpg",
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
        entryUrl: "https://admin.fritz.gmbh/?lang=de",
    }

    constructor() {
        super(EcsWebhostingCollector.CONFIG);
    }
}
