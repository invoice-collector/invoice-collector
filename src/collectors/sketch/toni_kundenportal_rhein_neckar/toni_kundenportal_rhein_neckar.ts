
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ToniKundenportalRheinNeckarCollector extends SketchCollector {

    static CONFIG = {
        id: "toni_kundenportal_rhein_neckar",
        name: "Toni - Kundenportal Rhein-Neckar",
        description: "i18n.collectors.toni_kundenportal_rhein_neckar.description",
        version: "0",
        website: "https://bbvpfalz.co.crm-now.de/kundenportal/login.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4457664.jpg",
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
        loginUrl: "https://bbvpfalz.co.crm-now.de/kundenportal/login.php",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ToniKundenportalRheinNeckarCollector.CONFIG);
    }
}
