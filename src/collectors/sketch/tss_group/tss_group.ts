
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TssGroupCollector extends SketchCollector {

    static CONFIG = {
        id: "tss_group",
        name: "TSS Group",
        description: "i18n.collectors.tss_group.description",
        version: "0",
        website: "https://www.tss.coop/intranet9/chefsache/rechnungsarchiv.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4571947.jpg",
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
        loginUrl: "https://www.tss.coop/intranet9/chefsache/rechnungsarchiv.html",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TssGroupCollector.CONFIG);
    }
}
