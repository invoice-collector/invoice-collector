
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ShirtrunnerCollector extends SketchCollector {

    static CONFIG = {
        id: "shirtrunner",
        name: "Shirtrunner",
        description: "i18n.collectors.shirtrunner.description",
        version: "0",
        website: "https://www.shirtrunner.de/station/auftragsuebersicht",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1258381.jpg",
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
        loginUrl: "https://www.shirtrunner.de/station/auftragsuebersicht",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ShirtrunnerCollector.CONFIG);
    }
}
