
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class HochzeitManagementCollector extends SketchCollector {

    static CONFIG = {
        id: "hochzeit_management",
        name: "Hochzeit.Management",
        description: "i18n.collectors.hochzeit_management.description",
        version: "0",
        website: "https://app.hochzeit.management/Invoice?view=overview&list=all",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/194680.jpg",
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
        loginUrl: "https://app.hochzeit.management/Invoice?view=overview&list=all",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HochzeitManagementCollector.CONFIG);
    }
}
