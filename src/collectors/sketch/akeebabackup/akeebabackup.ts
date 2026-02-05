
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AkeebabackupCollector extends SketchCollector {

    static CONFIG = {
        id: "akeebabackup",
        name: "AkeebaBackup",
        description: "i18n.collectors.akeebabackup.description",
        version: "0",
        website: "https://www.akeebabackup.com/my-subscriptions/subscriptions.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/62327.jpg",
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
        loginUrl: "https://www.akeebabackup.com/my-subscriptions/subscriptions.html",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(AkeebabackupCollector.CONFIG);
    }
}
