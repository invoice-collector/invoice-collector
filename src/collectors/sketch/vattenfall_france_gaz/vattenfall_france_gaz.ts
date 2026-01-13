
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class VattenfallFranceGazCollector extends SketchCollector {

    static CONFIG = {
        id: "vattenfall_france_gaz",
        name: "Vattenfall France - Gaz",
        description: "i18n.collectors.vattenfall_france_gaz.description",
        version: "0",
        website: "https://espaceclientgaz.vattenfall-energies.fr/list/view/4",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4642218.jpg",
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
        loginUrl: "https://espaceclientgaz.vattenfall-energies.fr/list/view/4",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VattenfallFranceGazCollector.CONFIG);
    }
}
