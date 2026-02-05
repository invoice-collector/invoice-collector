
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MyfitecoSalairesCollector extends SketchCollector {

    static CONFIG = {
        id: "myfiteco_salaires",
        name: "myfiteco.salaires",
        description: "i18n.collectors.myfiteco_salaires.description",
        version: "0",
        website: "https://myfiteco.com/bulletins-salaires",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3313834.jpg",
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
        loginUrl: "https://myfiteco.com/bulletins-salaires",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(MyfitecoSalairesCollector.CONFIG);
    }
}
