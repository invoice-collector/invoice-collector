
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FeedbackgeniusCollector extends SketchCollector {

    static CONFIG = {
        id: "feedbackgenius",
        name: "FeedbackGenius",
        description: "i18n.collectors.feedbackgenius.description",
        version: "0",
        website: "https://accounts.sellerlabs.com/login?redirect=%2Foauth%2Fauth%3Fclient_id%3D17%26redirect_uri%3Dhttps%253A%252F%252Ffeedbackgenius.sellerlabs.com%252Foauth%252Freceive%26scope%3D%26response_type%3Dcode",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/52378.jpg",
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
        loginUrl: "https://accounts.sellerlabs.com/login?redirect=%2Foauth%2Fauth%3Fclient_id%3D17%26redirect_uri%3Dhttps%253A%252F%252Ffeedbackgenius.sellerlabs.com%252Foauth%252Freceive%26scope%3D%26response_type%3Dcode",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FeedbackgeniusCollector.CONFIG);
    }
}
