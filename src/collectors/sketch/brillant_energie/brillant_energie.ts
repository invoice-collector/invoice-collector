
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BrillantEnergieCollector extends SketchCollector {

    static CONFIG = {
        id: "brillant_energie",
        name: "Brillant Energie",
        description: "i18n.collectors.brillant_energie.description",
        version: "0",
        website: "https://portal.brillantenergie.de/auth/realms/brillant/protocol/openid-connect/auth?client_id=brillant-customer-portal-frontend&redirect_uri=https%3A%2F%2Fportal.brillantenergie.de%2Fbrillant-customer-portal-frontend%2F&state=eb2559e8-3118-44f8-a9c6-7ba21",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1060571.jpg",
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
        loginUrl: "https://portal.brillantenergie.de/auth/realms/brillant/protocol/openid-connect/auth?client_id=brillant-customer-portal-frontend&redirect_uri=https%3A%2F%2Fportal.brillantenergie.de%2Fbrillant-customer-portal-frontend%2F&state=eb2559e8-3118-44f8-a9c6-7ba21",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(BrillantEnergieCollector.CONFIG);
    }
}
