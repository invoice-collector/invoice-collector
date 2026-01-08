
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MyAyvensManagerCollector extends SketchCollector {

    static CONFIG = {
        id: "my_ayvens_manager",
        name: "My Ayvens Manager",
        description: "i18n.collectors.my_ayvens_manager.description",
        version: "0",
        website: "https://manager.ayvens.fr/portal/aldnetpal/depenses/votre_coffre_fort/factures",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4385671.jpg",
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
        loginUrl: "https://manager.ayvens.fr/portal/aldnetpal/depenses/votre_coffre_fort/factures",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MyAyvensManagerCollector.CONFIG);
    }
}
