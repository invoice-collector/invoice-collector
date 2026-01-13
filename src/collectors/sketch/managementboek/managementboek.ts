
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ManagementboekCollector extends SketchCollector {

    static CONFIG = {
        id: "managementboek",
        name: "Managementboek",
        description: "i18n.collectors.managementboek.description",
        version: "0",
        website: "https://www.managementboek.nl/uwaccount/overzicht",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/33051.jpg",
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
        loginUrl: "https://www.managementboek.nl/uwaccount/overzicht",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ManagementboekCollector.CONFIG);
    }
}
