
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SasktelCollector extends SketchCollector {

    static CONFIG = {
        id: "sasktel",
        name: "SaskTel",
        description: "i18n.collectors.sasktel.description",
        version: "0",
        website: "https://sso.sasktel.com/iam/SasktelLogin?bmctx=573900EFA02B1469DB53F7C6EEA40B1EEE1C650556767FD737825CC81F92B053&contextType=external&username=string&OverrideRetryLimit=3&password=secure_string&challenge_url=%2Fiam%2FSasktelLogin&request_id=404331019806325",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8699.jpg",
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
        loginUrl: "https://sso.sasktel.com/iam/SasktelLogin?bmctx=573900EFA02B1469DB53F7C6EEA40B1EEE1C650556767FD737825CC81F92B053&contextType=external&username=string&OverrideRetryLimit=3&password=secure_string&challenge_url=%2Fiam%2FSasktelLogin&request_id=404331019806325",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(SasktelCollector.CONFIG);
    }
}
