
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TelenorDkErhvervCollector extends SketchCollector {

    static CONFIG = {
        id: "telenor_dk_erhverv",
        name: "Telenor.dk Erhverv",
        description: "i18n.collectors.telenor_dk_erhverv.description",
        version: "0",
        website: "https://www.telenor.dk/erhverv/selvbetjening/faktura/kontooverblik/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/80521.jpg",
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
        loginUrl: "https://www.telenor.dk/erhverv/selvbetjening/faktura/kontooverblik/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TelenorDkErhvervCollector.CONFIG);
    }
}
