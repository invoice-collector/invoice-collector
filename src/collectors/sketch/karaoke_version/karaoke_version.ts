
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class KaraokeVersionCollector extends SketchCollector {

    static CONFIG = {
        id: "karaoke_version",
        name: "Karaoke Version",
        description: "i18n.collectors.karaoke_version.description",
        version: "0",
        website: "https://www.karaoke-version.de/my/orders.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/89368.jpg",
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
        loginUrl: "https://www.karaoke-version.de/my/orders.html",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(KaraokeVersionCollector.CONFIG);
    }
}
