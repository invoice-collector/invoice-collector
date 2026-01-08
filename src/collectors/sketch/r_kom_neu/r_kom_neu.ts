
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class RKomNeuCollector extends SketchCollector {

    static CONFIG = {
        id: "r_kom_neu",
        name: "R-KOM neu",
        description: "i18n.collectors.r_kom_neu.description",
        version: "0",
        website: "https://login.r-kom.de/auth/realms/customers/protocol/openid-connect/auth?ui_locales=de&scope=openid+email+profile+customer&response_type=code&redirect_uri=https%3A%2F%2Fserviceportal.r-kom.de%2Fc%2Fportal%2Flogin%2Fopenidconnect&state=v3K2BqGhxkEEJetdxrk",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3136815.jpg",
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
        loginUrl: "https://login.r-kom.de/auth/realms/customers/protocol/openid-connect/auth?ui_locales=de&scope=openid+email+profile+customer&response_type=code&redirect_uri=https%3A%2F%2Fserviceportal.r-kom.de%2Fc%2Fportal%2Flogin%2Fopenidconnect&state=v3K2BqGhxkEEJetdxrk",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RKomNeuCollector.CONFIG);
    }
}
