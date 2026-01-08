
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class InterimobCollector extends SketchCollector {

    static CONFIG = {
        id: "interimob",
        name: "INTERIMOB",
        description: "i18n.collectors.interimob.description",
        version: "0",
        website: "https://auth-prd031.monespaceclient.immo/auth/realms/interimob/protocol/openid-connect/auth?client_id=ect-spa&redirect_uri=https%3A%2F%2Finterimob.monespaceclient.immo%2F&state=53cd0ea2-b15c-43ac-9f2b-c56ec761ffc6&response_mode=fragment&response_type=code",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2211141.jpg",
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
        loginUrl: "https://auth-prd031.monespaceclient.immo/auth/realms/interimob/protocol/openid-connect/auth?client_id=ect-spa&redirect_uri=https%3A%2F%2Finterimob.monespaceclient.immo%2F&state=53cd0ea2-b15c-43ac-9f2b-c56ec761ffc6&response_mode=fragment&response_type=code",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(InterimobCollector.CONFIG);
    }
}
