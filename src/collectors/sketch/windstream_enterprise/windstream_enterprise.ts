
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class WindstreamEnterpriseCollector extends SketchCollector {

    static CONFIG = {
        id: "windstream_enterprise",
        name: "Windstream Enterprise",
        description: "i18n.collectors.windstream_enterprise.description",
        version: "0",
        website: "https://www.windstreamonline.com/pol/Home.action?cm_sp=BizUtilityNav-_-Customer%2520Login-_-NA",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/88465.jpg",
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
        loginUrl: "https://www.windstreamonline.com/pol/Home.action?cm_sp=BizUtilityNav-_-Customer%2520Login-_-NA",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WindstreamEnterpriseCollector.CONFIG);
    }
}
