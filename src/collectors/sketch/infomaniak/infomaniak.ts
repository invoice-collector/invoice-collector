
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class InfomaniakCollector extends SketchCollector {

    static CONFIG = {
        id: "infomaniak",
        name: "Infomaniak",
        description: "i18n.collectors.infomaniak.description",
        version: "0",
        website: "https://login.infomaniak.com/en/login?r=%2Fauthorize%3Fscope%3Dcrypt_key%2Bprivate%2Baccounts%2Busers%2Buser_email%2Buser_info%26state%3D%252F%26s%3Da%26access_type%3Doffline",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/33044.jpg",
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
        loginUrl: "https://login.infomaniak.com/en/login?r=%2Fauthorize%3Fscope%3Dcrypt_key%2Bprivate%2Baccounts%2Busers%2Buser_email%2Buser_info%26state%3D%252F%26s%3Da%26access_type%3Doffline",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(InfomaniakCollector.CONFIG);
    }
}
