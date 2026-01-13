
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class WithoutaboxCollector extends SketchCollector {

    static CONFIG = {
        id: "withoutabox",
        name: "Withoutabox",
        description: "i18n.collectors.withoutabox.description",
        version: "0",
        website: "https://www.withoutabox.com/index.php?cmd=public.login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/19099.jpg",
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
        loginUrl: "https://www.withoutabox.com/index.php?cmd=public.login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WithoutaboxCollector.CONFIG);
    }
}
