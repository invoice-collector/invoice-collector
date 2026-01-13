
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class GrundrissCollector extends SketchCollector {

    static CONFIG = {
        id: "grundriss",
        name: "Grundriss",
        description: "i18n.collectors.grundriss.description",
        version: "0",
        website: "https://www.grundriss.com/auftragsuebersicht.html?rechnungen=1",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/53810.jpg",
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
        loginUrl: "https://www.grundriss.com/auftragsuebersicht.html?rechnungen=1",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GrundrissCollector.CONFIG);
    }
}
