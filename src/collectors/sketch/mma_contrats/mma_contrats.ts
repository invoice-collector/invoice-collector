
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MmaContratsCollector extends SketchCollector {

    static CONFIG = {
        id: "mma_contrats",
        name: "MMA Contrats",
        description: "i18n.collectors.mma_contrats.description",
        version: "0",
        website: "https://espace-client.mma.fr/authenticationForm/compteClientLogin/index?nexturl=https%3A%2F%2Fespace-client.mma.fr%2Fconnaissance-client%2Fsynthese&domain=client",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/107151.jpg",
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
        loginUrl: "https://espace-client.mma.fr/authenticationForm/compteClientLogin/index?nexturl=https%3A%2F%2Fespace-client.mma.fr%2Fconnaissance-client%2Fsynthese&domain=client",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MmaContratsCollector.CONFIG);
    }
}
