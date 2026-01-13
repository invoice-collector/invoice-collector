
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class GooglePlayConsoleCollector extends SketchCollector {

    static CONFIG = {
        id: "google_play_console",
        name: "Google Play Console",
        description: "i18n.collectors.google_play_console.description",
        version: "0",
        website: "https://play.google.com/apps/publish/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/396947.jpg",
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
        loginUrl: "https://play.google.com/apps/publish/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GooglePlayConsoleCollector.CONFIG);
    }
}
