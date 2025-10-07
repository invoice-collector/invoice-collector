
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GLockAppsCollector extends SketchCollector {

    static CONFIG = {
        id: "g_lock_apps",
        name: "G-Lock Apps",
        description: "i18n.collectors.g_lock_apps.description",
        version: "0",
        website: "https://app.glockapps.com/login?_ga=2.128968906.738088806.1523938159-636296687.1523938159",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/11276.jpg",
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
        entryUrl: "https://app.glockapps.com/login?_ga=2.128968906.738088806.1523938159-636296687.1523938159",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GLockAppsCollector.CONFIG);
    }
}
