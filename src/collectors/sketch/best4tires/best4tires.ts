
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class Best4tiresCollector extends SketchCollector {

    static CONFIG = {
        id: "best4tires",
        name: "best4tires",
        description: "i18n.collectors.best4tires.description",
        version: "0",
        website: "https://login.best4tires.com/auth/realms/mygundlach/protocol/openid-connect/auth?client_id=frontend&redirect_uri=https%3A%2F%2Fwww.best4tires.com%2Fde%2Fuser%2Fcallback%2F&response_type=code&state=&ui_locales=de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1440626.jpg",
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
        loginUrl: "https://login.best4tires.com/auth/realms/mygundlach/protocol/openid-connect/auth?client_id=frontend&redirect_uri=https%3A%2F%2Fwww.best4tires.com%2Fde%2Fuser%2Fcallback%2F&response_type=code&state=&ui_locales=de",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(Best4tiresCollector.CONFIG);
    }
}
