
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EnergieDIciCollector extends SketchCollector {

    static CONFIG = {
        id: "energie_d_ici",
        name: "Energie D\'ici",
        description: "i18n.collectors.energie_d_ici.description",
        version: "0",
        website: "https://mon.energiedici.fr/wp/showDisplayBills.action",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/779000.jpg",
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
        loginUrl: "https://mon.energiedici.fr/wp/showDisplayBills.action",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(EnergieDIciCollector.CONFIG);
    }
}
