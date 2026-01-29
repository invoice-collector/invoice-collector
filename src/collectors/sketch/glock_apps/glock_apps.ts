
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class GlockAppsCollector extends SketchCollector {

    static CONFIG = {
        id: "glock_apps",
        name: "GLOCK APPS",
        description: "i18n.collectors.glock_apps.description",
        version: "0",
        website: "https://app.glockapps.com/settings/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/860297.jpg",
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
        loginUrl: "https://app.glockapps.com/settings/account",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(GlockAppsCollector.CONFIG);
    }
}
