
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TheOrchardWorkstationCollector extends SketchCollector {

    static CONFIG = {
        id: "the_orchard_workstation",
        name: "The Orchard Workstation",
        description: "i18n.collectors.the_orchard_workstation.description",
        version: "0",
        website: "https://workstation.theorchard.com/accounting/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1966438.jpg",
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
        loginUrl: "https://workstation.theorchard.com/accounting/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TheOrchardWorkstationCollector.CONFIG);
    }
}
