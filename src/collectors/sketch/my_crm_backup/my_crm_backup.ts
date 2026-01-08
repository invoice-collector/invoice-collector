
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MyCrmBackupCollector extends SketchCollector {

    static CONFIG = {
        id: "my_crm_backup",
        name: "My CRM BackUp",
        description: "i18n.collectors.my_crm_backup.description",
        version: "0",
        website: "https://app.mycrmbackup.com/subscription/edit",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4178948.jpg",
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
        loginUrl: "https://app.mycrmbackup.com/subscription/edit",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MyCrmBackupCollector.CONFIG);
    }
}
