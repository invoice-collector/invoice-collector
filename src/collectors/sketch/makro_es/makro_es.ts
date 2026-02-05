
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MakroEsCollector extends SketchCollector {

    static CONFIG = {
        id: "makro_es",
        name: "Makro.es",
        description: "i18n.collectors.makro_es.description",
        version: "0",
        website: "https://docs.makro.es/?_ga=2.64458799.1836613730.1568624469-1760255380.1568027377",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/166538.jpg",
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
        loginUrl: "https://docs.makro.es/?_ga=2.64458799.1836613730.1568624469-1760255380.1568027377",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(MakroEsCollector.CONFIG);
    }
}
