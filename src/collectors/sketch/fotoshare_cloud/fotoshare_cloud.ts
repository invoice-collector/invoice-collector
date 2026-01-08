
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FotoshareCloudCollector extends SketchCollector {

    static CONFIG = {
        id: "fotoshare_cloud",
        name: "fotoshare Cloud",
        description: "i18n.collectors.fotoshare_cloud.description",
        version: "0",
        website: "https://fotoshare.co/admin/licenses/fotoshare_cloud",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1207823.jpg",
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
        loginUrl: "https://fotoshare.co/admin/licenses/fotoshare_cloud",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FotoshareCloudCollector.CONFIG);
    }
}
