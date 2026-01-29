
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class YesssCollector extends SketchCollector {

    static CONFIG = {
        id: "yesss",
        name: "yesss!",
        description: "i18n.collectors.yesss.description",
        version: "0",
        website: "https://www.yesss.at/kontomanager.at/aufladungen_rechnungsbelege.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/89122.jpg",
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
        loginUrl: "https://www.yesss.at/kontomanager.at/aufladungen_rechnungsbelege.php",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(YesssCollector.CONFIG);
    }
}
