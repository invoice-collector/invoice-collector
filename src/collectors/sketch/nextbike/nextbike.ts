
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class NextbikeCollector extends SketchCollector {

    static CONFIG = {
        id: "nextbike",
        name: "nextbike",
        description: "i18n.collectors.nextbike.description",
        version: "0",
        website: "https://iframe.nextbike.net/iframe/?domain=de&L=en&id=login&nolinks=0&redirect_index=https://www.nextbike.de/en/&redirect_account=https://secure.nextbike.net/de/en/account/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/23769.jpg",
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
        loginUrl: "https://iframe.nextbike.net/iframe/?domain=de&L=en&id=login&nolinks=0&redirect_index=https://www.nextbike.de/en/&redirect_account=https://secure.nextbike.net/de/en/account/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(NextbikeCollector.CONFIG);
    }
}
