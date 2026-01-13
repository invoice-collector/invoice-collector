
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class KerlogCollector extends SketchCollector {

    static CONFIG = {
        id: "kerlog",
        name: "Kerlog",
        description: "i18n.collectors.kerlog.description",
        version: "0",
        website: "https://www.ecorec-online.fr/Kerlog/Portail/#/ecoportail/document/Documents%20KERLOG",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1526337.jpg",
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
        loginUrl: "https://www.ecorec-online.fr/Kerlog/Portail/#/ecoportail/document/Documents%20KERLOG",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(KerlogCollector.CONFIG);
    }
}
