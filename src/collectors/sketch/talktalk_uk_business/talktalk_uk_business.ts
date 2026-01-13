
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TalktalkUkBusinessCollector extends SketchCollector {

    static CONFIG = {
        id: "talktalk_uk_business",
        name: "TalkTalk UK Business",
        description: "i18n.collectors.talktalk_uk_business.description",
        version: "0",
        website: "https://supportcentre.talktalkbusiness.co.uk/home",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/692750.jpg",
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
        loginUrl: "https://supportcentre.talktalkbusiness.co.uk/home",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TalktalkUkBusinessCollector.CONFIG);
    }
}
