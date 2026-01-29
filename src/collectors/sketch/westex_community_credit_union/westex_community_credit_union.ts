
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class WestexCommunityCreditUnionCollector extends SketchCollector {

    static CONFIG = {
        id: "westex_community_credit_union",
        name: "WesTex Community Credit Union",
        description: "i18n.collectors.westex_community_credit_union.description",
        version: "0",
        website: "https://www.mobicint.net/wnk/statements",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/457664.jpg",
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
        loginUrl: "https://www.mobicint.net/wnk/statements",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(WestexCommunityCreditUnionCollector.CONFIG);
    }
}
