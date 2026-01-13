
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AsAbrechnungsstelleAgCollector extends SketchCollector {

    static CONFIG = {
        id: "as_abrechnungsstelle_ag",
        name: "AS Abrechnungsstelle AG",
        description: "i18n.collectors.as_abrechnungsstelle_ag.description",
        version: "0",
        website: "https://kunden.as-bremen.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1389828.jpg",
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
        loginUrl: "https://kunden.as-bremen.de/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AsAbrechnungsstelleAgCollector.CONFIG);
    }
}
