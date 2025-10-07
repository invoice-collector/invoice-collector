
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class KioskBrowserRemoteCollector extends SketchCollector {

    static CONFIG = {
        id: "kiosk_browser_remote",
        name: "Kiosk Browser Remote",
        description: "i18n.collectors.kiosk_browser_remote.description",
        version: "0",
        website: "https://www.kbremote.net/Home/Start",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/34877.jpg",
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
        entryUrl: "https://www.kbremote.net/Home/Start",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(KioskBrowserRemoteCollector.CONFIG);
    }
}
