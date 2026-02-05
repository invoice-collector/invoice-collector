
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MichaelManagementCollector extends SketchCollector {

    static CONFIG = {
        id: "michael_management",
        name: "michael management",
        description: "i18n.collectors.michael_management.description",
        version: "0",
        website: "https://www.michaelmanagement.com/edit-account.asp?tab=menu1&childtab=profile8",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778953.jpg",
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
        loginUrl: "https://www.michaelmanagement.com/edit-account.asp?tab=menu1&childtab=profile8",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(MichaelManagementCollector.CONFIG);
    }
}
