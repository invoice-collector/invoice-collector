
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class WilhelmRinkCollector extends SketchCollector {

    static CONFIG = {
        id: "wilhelm_rink",
        name: "Wilhelm Rink",
        description: "i18n.collectors.wilhelm_rink.description",
        version: "0",
        website: "https://direkt.rink-elektro.de/cgi-bin/rink/SD02UQ6HQf7pH8dEe2H6TyxcqwaHyPe1L8E46Q436wq2DfA9BGatpwKKcBRKArTGtxHUwp5Qet5yKsBBqBt27drGLTxt3sDs51d7CPBx3q",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1417913.jpg",
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
        loginUrl: "https://direkt.rink-elektro.de/cgi-bin/rink/SD02UQ6HQf7pH8dEe2H6TyxcqwaHyPe1L8E46Q436wq2DfA9BGatpwKKcBRKArTGtxHUwp5Qet5yKsBBqBt27drGLTxt3sDs51d7CPBx3q",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WilhelmRinkCollector.CONFIG);
    }
}
