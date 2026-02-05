
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class OpenTelekomCloudCollector extends SketchCollector {

    static CONFIG = {
        id: "open_telekom_cloud",
        name: "Open Telekom Cloud",
        description: "i18n.collectors.open_telekom_cloud.description",
        version: "0",
        website: "https://www.websso.t-systems.com/MyWorkplace/General/TSIPageContainer.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/779628.jpg",
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
        loginUrl: "https://www.websso.t-systems.com/MyWorkplace/General/TSIPageContainer.aspx",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(OpenTelekomCloudCollector.CONFIG);
    }
}
