
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EuropcarCorporateCollector extends SketchCollector {

    static CONFIG = {
        id: "europcar_corporate",
        name: "Europcar Corporate",
        description: "i18n.collectors.europcar_corporate.description",
        version: "0",
        website: "http://europcar.generix.biz/txe/ui/portal.jsf",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/215169.jpg",
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
        loginUrl: "http://europcar.generix.biz/txe/ui/portal.jsf",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EuropcarCorporateCollector.CONFIG);
    }
}
