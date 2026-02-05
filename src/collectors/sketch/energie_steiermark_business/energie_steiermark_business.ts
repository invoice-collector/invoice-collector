
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EnergieSteiermarkBusinessCollector extends SketchCollector {

    static CONFIG = {
        id: "energie_steiermark_business",
        name: "Energie Steiermark Business",
        description: "i18n.collectors.energie_steiermark_business.description",
        version: "0",
        website: "https://kundenportal.e-steiermark.com/rechnungen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2419774.jpg",
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
        loginUrl: "https://kundenportal.e-steiermark.com/rechnungen",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(EnergieSteiermarkBusinessCollector.CONFIG);
    }
}
