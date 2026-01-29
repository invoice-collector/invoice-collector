
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FoxyofficeCollector extends SketchCollector {

    static CONFIG = {
        id: "foxyoffice",
        name: "FoxyOffice",
        description: "i18n.collectors.foxyoffice.description",
        version: "0",
        website: "https://mars.foxyoffice.eu/ellimachtfit/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/955989.jpg",
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
        loginUrl: "https://mars.foxyoffice.eu/ellimachtfit/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(FoxyofficeCollector.CONFIG);
    }
}
