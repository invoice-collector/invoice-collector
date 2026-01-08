
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TrackerSoftwareCollector extends SketchCollector {

    static CONFIG = {
        id: "tracker_software",
        name: "Tracker Software",
        description: "i18n.collectors.tracker_software.description",
        version: "0",
        website: "https://www.tracker-software.com/account/my_account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/96005.jpg",
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
        loginUrl: "https://www.tracker-software.com/account/my_account",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TrackerSoftwareCollector.CONFIG);
    }
}
