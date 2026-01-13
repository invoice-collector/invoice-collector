
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CaissesDesjardinsCollector extends SketchCollector {

    static CONFIG = {
        id: "caisses_desjardins",
        name: "Caisses Desjardins",
        description: "i18n.collectors.caisses_desjardins.description",
        version: "0",
        website: "https://accweb.mouv.desjardins.com/identifiantunique/identification?domaineVirtuel=desjardins&langueCible=en",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/77612.jpg",
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
        loginUrl: "https://accweb.mouv.desjardins.com/identifiantunique/identification?domaineVirtuel=desjardins&langueCible=en",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CaissesDesjardinsCollector.CONFIG);
    }
}
