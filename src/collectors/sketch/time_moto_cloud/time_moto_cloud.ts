
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TimeMotoCloudCollector extends SketchCollector {

    static CONFIG = {
        id: "time_moto_cloud",
        name: "Time Moto Cloud",
        description: "i18n.collectors.time_moto_cloud.description",
        version: "0",
        website: "https://auth-eu.timemoto.com/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3DCloud%26redirect_uri%3Dhttps%253A%252F%252Fcloud-eu.timemoto.com%26response_type%3Dcode%26scope%3Dopenid%2520profile%2520public-api%26nonce%3D940fc10e5585",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1301877.jpg",
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
        loginUrl: "https://auth-eu.timemoto.com/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3DCloud%26redirect_uri%3Dhttps%253A%252F%252Fcloud-eu.timemoto.com%26response_type%3Dcode%26scope%3Dopenid%2520profile%2520public-api%26nonce%3D940fc10e5585",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(TimeMotoCloudCollector.CONFIG);
    }
}
