
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class LudwigsburgerKreiszeitungCollector extends SketchCollector {

    static CONFIG = {
        id: "ludwigsburger_kreiszeitung",
        name: "Ludwigsburger Kreiszeitung",
        description: "i18n.collectors.ludwigsburger_kreiszeitung.description",
        version: "0",
        website: "https://www.lkz.de/benutzerkonto.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4693556.jpg",
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
        loginUrl: "https://www.lkz.de/benutzerkonto.html",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LudwigsburgerKreiszeitungCollector.CONFIG);
    }
}
