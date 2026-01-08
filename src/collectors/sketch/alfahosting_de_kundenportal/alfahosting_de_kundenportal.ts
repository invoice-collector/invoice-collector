
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AlfahostingDeKundenportalCollector extends SketchCollector {

    static CONFIG = {
        id: "alfahosting_de_kundenportal",
        name: "Alfahosting.de - Kundenportal",
        description: "i18n.collectors.alfahosting_de_kundenportal.description",
        version: "0",
        website: "https://secure.alfahosting.de/kunden/index.php/Benutzer:Logout",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/458.jpg",
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
        loginUrl: "https://secure.alfahosting.de/kunden/index.php/Benutzer:Logout",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AlfahostingDeKundenportalCollector.CONFIG);
    }
}
