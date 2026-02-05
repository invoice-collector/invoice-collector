
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class InstaganttCollector extends SketchCollector {

    static CONFIG = {
        id: "instagantt",
        name: "Instagantt",
        description: "i18n.collectors.instagantt.description",
        version: "0",
        website: "https://app.asana.com/-/oauth_authorize?response_type=code&client_id=5275785675948&redirect_uri=https://instagantt.com/asana/auth",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/17404.jpg",
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
        loginUrl: "https://app.asana.com/-/oauth_authorize?response_type=code&client_id=5275785675948&redirect_uri=https://instagantt.com/asana/auth",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(InstaganttCollector.CONFIG);
    }
}
