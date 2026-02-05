
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MyappyourselfCollector extends SketchCollector {

    static CONFIG = {
        id: "myappyourself",
        name: "MyAppYourself",
        description: "i18n.collectors.myappyourself.description",
        version: "0",
        website: "https://my.appyourself.net/#/account/data",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/96506.jpg",
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
        loginUrl: "https://my.appyourself.net/#/account/data",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(MyappyourselfCollector.CONFIG);
    }
}
