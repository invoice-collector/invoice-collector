
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CosmicSportsB2bCollector extends SketchCollector {

    static CONFIG = {
        id: "cosmic_sports_b2b",
        name: "Cosmic Sports B2B",
        description: "i18n.collectors.cosmic_sports_b2b.description",
        version: "0",
        website: "https://b2b.cosmicsports.com/PrivateLogin/index/requireReload",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/770432.jpg",
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
        loginUrl: "https://b2b.cosmicsports.com/PrivateLogin/index/requireReload",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CosmicSportsB2bCollector.CONFIG);
    }
}
