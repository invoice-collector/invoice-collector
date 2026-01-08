
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ItRechtKanzleiDeCollector extends SketchCollector {

    static CONFIG = {
        id: "it_recht_kanzlei_de",
        name: "IT-Recht-Kanzlei.de",
        description: "i18n.collectors.it_recht_kanzlei_de.description",
        version: "0",
        website: "https://www.it-recht-kanzlei.de/Portal/rechnungen.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/14229.jpg",
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
        loginUrl: "https://www.it-recht-kanzlei.de/Portal/rechnungen.php",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ItRechtKanzleiDeCollector.CONFIG);
    }
}
