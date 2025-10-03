
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WorldFirstOnlineCollector extends SketchCollector {

    static CONFIG = {
        id: "world_first_online",
        name: "World First Online",
        description: "i18n.collectors.world_first_online.description",
        version: "0",
        website: "https://trading.worldfirst.com/user/auth/login?lang=en_GB",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8525.jpg",
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
        entryUrl: "https://trading.worldfirst.com/user/auth/login?lang=en_GB",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WorldFirstOnlineCollector.CONFIG);
    }
}
