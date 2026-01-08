
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EmbEnergieCollector extends SketchCollector {

    static CONFIG = {
        id: "emb_energie",
        name: "EMB Energie",
        description: "i18n.collectors.emb_energie.description",
        version: "0",
        website: "https://www.emb-gmbh.de/onlineservice/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/90713.jpg",
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
        loginUrl: "https://www.emb-gmbh.de/onlineservice/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EmbEnergieCollector.CONFIG);
    }
}
