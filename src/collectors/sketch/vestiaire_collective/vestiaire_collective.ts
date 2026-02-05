
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class VestiaireCollectiveCollector extends SketchCollector {

    static CONFIG = {
        id: "vestiaire_collective",
        name: "Vestiaire collective",
        description: "i18n.collectors.vestiaire_collective.description",
        version: "0",
        website: "https://fr.vestiairecollective.com/mon-compte.shtml#commandes",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1616488.jpg",
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
        loginUrl: "https://fr.vestiairecollective.com/mon-compte.shtml#commandes",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(VestiaireCollectiveCollector.CONFIG);
    }
}
