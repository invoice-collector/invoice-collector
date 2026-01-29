
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class StadtwerkeCoesfeldGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtwerke_coesfeld_gmbh",
        name: "Stadtwerke Coesfeld GmbH",
        description: "i18n.collectors.stadtwerke_coesfeld_gmbh.description",
        version: "0",
        website: "https://kundenlogin.stadtwerke-coesfeld.de/oauth2/authorize?scope=openid%20offline_access&redirect_uri=https%3A%2F%2Fportal.stadtwerke-coesfeld.de%2Foauth%2Fcallback&code_challenge=atIRA1q-86UTOzoobOnCIHEwHE2XdNqWhtgIZh0yS9I&code_challenge_method=S256&cli",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1052819.jpg",
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
        loginUrl: "https://kundenlogin.stadtwerke-coesfeld.de/oauth2/authorize?scope=openid%20offline_access&redirect_uri=https%3A%2F%2Fportal.stadtwerke-coesfeld.de%2Foauth%2Fcallback&code_challenge=atIRA1q-86UTOzoobOnCIHEwHE2XdNqWhtgIZh0yS9I&code_challenge_method=S256&cli",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(StadtwerkeCoesfeldGmbhCollector.CONFIG);
    }
}
