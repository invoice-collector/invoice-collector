
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ManagerseminareCollector extends SketchCollector {

    static CONFIG = {
        id: "managerseminare",
        name: "Managerseminare",
        description: "i18n.collectors.managerseminare.description",
        version: "0",
        website: "https://www.managerseminare.de/Login/Rechnungseinstellungen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/759090.jpg",
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
        loginUrl: "https://www.managerseminare.de/Login/Rechnungseinstellungen",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ManagerseminareCollector.CONFIG);
    }
}
