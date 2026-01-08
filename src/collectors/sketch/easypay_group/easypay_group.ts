
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EasypayGroupCollector extends SketchCollector {

    static CONFIG = {
        id: "easypay_group",
        name: "EASYPAY GROUP",
        description: "i18n.collectors.easypay_group.description",
        version: "0",
        website: "https://sce-easyonline.easypay-group.com/xhtml/com/easypaygroup/easyonline/view/index.xhtml",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/830207.jpg",
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
        loginUrl: "https://sce-easyonline.easypay-group.com/xhtml/com/easypaygroup/easyonline/view/index.xhtml",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EasypayGroupCollector.CONFIG);
    }
}
