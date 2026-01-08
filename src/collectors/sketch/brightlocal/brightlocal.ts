
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BrightlocalCollector extends SketchCollector {

    static CONFIG = {
        id: "brightlocal",
        name: "BrightLocal",
        description: "i18n.collectors.brightlocal.description",
        version: "0",
        website: "https://tools.brightlocal.com/seo-tools/admin/login?redirect_url=%252Fseo-tools%252Fadmin%252Fclients-and-locations&redirect_source=access_control",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/511283.jpg",
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
        loginUrl: "https://tools.brightlocal.com/seo-tools/admin/login?redirect_url=%252Fseo-tools%252Fadmin%252Fclients-and-locations&redirect_source=access_control",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BrightlocalCollector.CONFIG);
    }
}
