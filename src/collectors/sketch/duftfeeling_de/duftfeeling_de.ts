
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DuftfeelingDeCollector extends SketchCollector {

    static CONFIG = {
        id: "duftfeeling_de",
        name: "duftfeeling.de",
        description: "i18n.collectors.duftfeeling_de.description",
        version: "0",
        website: "https://duftfeeling.de/jtl.php?view=bestellungen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1210739.jpg",
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
        loginUrl: "https://duftfeeling.de/jtl.php?view=bestellungen",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DuftfeelingDeCollector.CONFIG);
    }
}
