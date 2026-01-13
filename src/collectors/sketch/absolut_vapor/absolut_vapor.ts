
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AbsolutVaporCollector extends SketchCollector {

    static CONFIG = {
        id: "absolut_vapor",
        name: "Absolut Vapor",
        description: "i18n.collectors.absolut_vapor.description",
        version: "0",
        website: "https://www.absolut-vapor.com/ecigarette-eliquide/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/115877.jpg",
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
        loginUrl: "https://www.absolut-vapor.com/ecigarette-eliquide/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AbsolutVaporCollector.CONFIG);
    }
}
