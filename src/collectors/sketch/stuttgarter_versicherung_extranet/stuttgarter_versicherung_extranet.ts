
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class StuttgarterVersicherungExtranetCollector extends SketchCollector {

    static CONFIG = {
        id: "stuttgarter_versicherung_extranet",
        name: "Stuttgarter Versicherung - Extranet",
        description: "i18n.collectors.stuttgarter_versicherung_extranet.description",
        version: "0",
        website: "https://extranet.stuttgarter.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/66875.jpg",
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
        loginUrl: "https://extranet.stuttgarter.de",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StuttgarterVersicherungExtranetCollector.CONFIG);
    }
}
