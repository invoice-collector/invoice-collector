
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class InterMaklerNetCollector extends SketchCollector {

    static CONFIG = {
        id: "inter_makler_net",
        name: "Inter-makler.net",
        description: "i18n.collectors.inter_makler_net.description",
        version: "0",
        website: "https://www.inter-makler.net/online-services/e-abrechnungsservice/login-e-abrechnungsservice/?tx_interftp_pi1%5Bcategory%5D=abr&tx_interftp_pi1%5Baction%5D=filelist&tx_interftp_pi1%5Bcontroller%5D=File&cHash=f0f81fed31a1c73ff1bab4a99221b664",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/221832.jpg",
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
        loginUrl: "https://www.inter-makler.net/online-services/e-abrechnungsservice/login-e-abrechnungsservice/?tx_interftp_pi1%5Bcategory%5D=abr&tx_interftp_pi1%5Baction%5D=filelist&tx_interftp_pi1%5Bcontroller%5D=File&cHash=f0f81fed31a1c73ff1bab4a99221b664",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(InterMaklerNetCollector.CONFIG);
    }
}
