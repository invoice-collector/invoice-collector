
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MmaSanteCollector extends SketchCollector {

    static CONFIG = {
        id: "mma_sante",
        name: "MMA Sante",
        description: "i18n.collectors.mma_sante.description",
        version: "0",
        website: "https://espace-client.mma.fr/authenticationForm/compteClientLogin/index?nexturl=https%253A%252F%252Fespace-client.mma.fr%252Fconnaissance-client%252Fsynthese&domain=client",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/125680.jpg",
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
        loginUrl: "https://espace-client.mma.fr/authenticationForm/compteClientLogin/index?nexturl=https%253A%252F%252Fespace-client.mma.fr%252Fconnaissance-client%252Fsynthese&domain=client",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(MmaSanteCollector.CONFIG);
    }
}
