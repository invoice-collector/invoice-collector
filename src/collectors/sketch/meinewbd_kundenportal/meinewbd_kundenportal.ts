
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MeinewbdKundenportalCollector extends SketchCollector {

    static CONFIG = {
        id: "meinewbd_kundenportal",
        name: "meineWBD - Kundenportal",
        description: "i18n.collectors.meinewbd_kundenportal.description",
        version: "0",
        website: "https://meine-wbd.de/de/portal/documents",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4691061.jpg",
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
        loginUrl: "https://meine-wbd.de/de/portal/documents",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MeinewbdKundenportalCollector.CONFIG);
    }
}
