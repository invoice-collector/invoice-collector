
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class WintopItServiceCollector extends SketchCollector {

    static CONFIG = {
        id: "wintop_it_service",
        name: "WinTOP IT-Service",
        description: "i18n.collectors.wintop_it_service.description",
        version: "0",
        website: "https://www.emeldeschein.de/oms/hausstat/viewAbrechnung.xhtml?faces-redirect=trueewAbrechnung.xhtml",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4509962.jpg",
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
        loginUrl: "https://www.emeldeschein.de/oms/hausstat/viewAbrechnung.xhtml?faces-redirect=trueewAbrechnung.xhtml",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(WintopItServiceCollector.CONFIG);
    }
}
