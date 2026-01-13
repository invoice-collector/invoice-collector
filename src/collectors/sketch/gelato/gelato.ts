
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class GelatoCollector extends SketchCollector {

    static CONFIG = {
        id: "gelato",
        name: "Gelato",
        description: "i18n.collectors.gelato.description",
        version: "0",
        website: "https://auth.gelato.com/auth/realms/gelato-api/protocol/openid-connect/auth?client_id=api-dashboard&redirect_uri=https%3A%2F%2Fdashboard.gelato.com%2Fauth%2Fsign-in%3Flocale%3Dde_DE&state=91d95fa8-3cfc-4f75-a404-ff11874f0713&response_mode=fragment&respons",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1173684.jpg",
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
        loginUrl: "https://auth.gelato.com/auth/realms/gelato-api/protocol/openid-connect/auth?client_id=api-dashboard&redirect_uri=https%3A%2F%2Fdashboard.gelato.com%2Fauth%2Fsign-in%3Flocale%3Dde_DE&state=91d95fa8-3cfc-4f75-a404-ff11874f0713&response_mode=fragment&respons",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GelatoCollector.CONFIG);
    }
}
