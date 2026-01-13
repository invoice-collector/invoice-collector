
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ReifenGoggelCollector extends SketchCollector {

    static CONFIG = {
        id: "reifen_goggel",
        name: "Reifen Goggel",
        description: "i18n.collectors.reifen_goggel.description",
        version: "0",
        website: "https://www.goeggel-reifenserver.de/shop/bestueb.php?site=anzeige&s=1&PHPSESSID=57f3979423ada967e9b691a5f72b0815",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2715359.jpg",
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
        loginUrl: "https://www.goeggel-reifenserver.de/shop/bestueb.php?site=anzeige&s=1&PHPSESSID=57f3979423ada967e9b691a5f72b0815",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ReifenGoggelCollector.CONFIG);
    }
}
