
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class VattenfallFranceElectriciteCollector extends SketchCollector {

    static CONFIG = {
        id: "vattenfall_france_electricite",
        name: "Vattenfall France - electricite",
        description: "i18n.collectors.vattenfall_france_electricite.description",
        version: "0",
        website: "https://espaceclient.vattenfall.fr/grandcompte/factures",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4642243.jpg",
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
        loginUrl: "https://espaceclient.vattenfall.fr/grandcompte/factures",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(VattenfallFranceElectriciteCollector.CONFIG);
    }
}
