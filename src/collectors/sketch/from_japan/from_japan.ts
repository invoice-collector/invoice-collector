
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FromJapanCollector extends SketchCollector {

    static CONFIG = {
        id: "from_japan",
        name: "FROM JAPAN",
        description: "i18n.collectors.from_japan.description",
        version: "0",
        website: "https://www.fromjapan.co.jp/en/member/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/830217.jpg",
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
        loginUrl: "https://www.fromjapan.co.jp/en/member/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(FromJapanCollector.CONFIG);
    }
}
