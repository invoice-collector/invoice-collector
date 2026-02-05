
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class KbvKehrmannBeschlagtechnikVelbertCollector extends SketchCollector {

    static CONFIG = {
        id: "kbv_kehrmann_beschlagtechnik_velbert",
        name: "KBV Kehrmann Beschlagtechnik Velbert",
        description: "i18n.collectors.kbv_kehrmann_beschlagtechnik_velbert.description",
        version: "0",
        website: "https://www.kbv-beschlaege-shop.de/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1261108.jpg",
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
        loginUrl: "https://www.kbv-beschlaege-shop.de/account",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(KbvKehrmannBeschlagtechnikVelbertCollector.CONFIG);
    }
}
