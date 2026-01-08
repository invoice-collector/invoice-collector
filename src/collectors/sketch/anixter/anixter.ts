
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AnixterCollector extends SketchCollector {

    static CONFIG = {
        id: "anixter",
        name: "ANIXTER",
        description: "i18n.collectors.anixter.description",
        version: "0",
        website: "https://www.eanixter.com/login.xhtml?spring-security-redirect=%2Fhome.xhtml&faces-redirect=true",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/74274.jpg",
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
        loginUrl: "https://www.eanixter.com/login.xhtml?spring-security-redirect=%2Fhome.xhtml&faces-redirect=true",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AnixterCollector.CONFIG);
    }
}
