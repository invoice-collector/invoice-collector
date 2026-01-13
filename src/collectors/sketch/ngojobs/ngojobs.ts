
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class NgojobsCollector extends SketchCollector {

    static CONFIG = {
        id: "ngojobs",
        name: "NGOJobs",
        description: "i18n.collectors.ngojobs.description",
        version: "0",
        website: "https://www.ngojobs.eu/wp-admin/edit.php?post_type=shop_order",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1986231.jpg",
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
        loginUrl: "https://www.ngojobs.eu/wp-admin/edit.php?post_type=shop_order",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(NgojobsCollector.CONFIG);
    }
}
