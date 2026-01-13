
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class GatsbyjsCollector extends SketchCollector {

    static CONFIG = {
        id: "gatsbyjs",
        name: "GatsbyJS",
        description: "i18n.collectors.gatsbyjs.description",
        version: "0",
        website: "https://www.gatsbyjs.com/dashboard/organization/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1621988.jpg",
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
        loginUrl: "https://www.gatsbyjs.com/dashboard/organization/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GatsbyjsCollector.CONFIG);
    }
}
