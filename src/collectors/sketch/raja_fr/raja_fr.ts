
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class RajaFrCollector extends SketchCollector {

    static CONFIG = {
        id: "raja_fr",
        name: "Raja.fr",
        description: "i18n.collectors.raja_fr.description",
        version: "0",
        website: "https://www.raja.fr/INTERSHOP/web/WFS/RAJA-FR-Site/fr_FR/-/EUR/ViewHeader-ViewAccountIdentification?TargetPipeline=ViewHomepage-Start&T_From=Header",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/36416.jpg",
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
        loginUrl: "https://www.raja.fr/INTERSHOP/web/WFS/RAJA-FR-Site/fr_FR/-/EUR/ViewHeader-ViewAccountIdentification?TargetPipeline=ViewHomepage-Start&T_From=Header",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(RajaFrCollector.CONFIG);
    }
}
