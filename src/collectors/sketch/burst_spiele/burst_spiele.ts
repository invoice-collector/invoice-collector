
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BurstSpieleCollector extends SketchCollector {

    static CONFIG = {
        id: "burst_spiele",
        name: "BURST Spiele",
        description: "i18n.collectors.burst_spiele.description",
        version: "0",
        website: "https://www.burstspiele.de/shop2/index.php?page=account&action=bills",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1980326.jpg",
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
        loginUrl: "https://www.burstspiele.de/shop2/index.php?page=account&action=bills",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BurstSpieleCollector.CONFIG);
    }
}
