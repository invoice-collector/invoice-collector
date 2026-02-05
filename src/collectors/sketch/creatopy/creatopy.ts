
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CreatopyCollector extends SketchCollector {

    static CONFIG = {
        id: "creatopy",
        name: "Creatopy",
        description: "i18n.collectors.creatopy.description",
        version: "0",
        website: "https://auth.creatopy.com/auth/realms/creatopy/protocol/openid-connect/auth?client_id=creatopy-webapp&redirect_uri=https%3A%2F%2Fapp.creatopy.com%2F&state=68ac7fd2-c4ff-4136-8818-d25f4c21d979&response_mode=fragment&response_type=code&scope=openid&nonce=e7",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1101213.jpg",
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
        loginUrl: "https://auth.creatopy.com/auth/realms/creatopy/protocol/openid-connect/auth?client_id=creatopy-webapp&redirect_uri=https%3A%2F%2Fapp.creatopy.com%2F&state=68ac7fd2-c4ff-4136-8818-d25f4c21d979&response_mode=fragment&response_type=code&scope=openid&nonce=e7",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(CreatopyCollector.CONFIG);
    }
}
