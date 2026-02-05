
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class HeinrichKippWerkGermanyCollector extends SketchCollector {

    static CONFIG = {
        id: "heinrich_kipp_werk_germany",
        name: "HEINRICH KIPP WERK - Germany",
        description: "i18n.collectors.heinrich_kipp_werk_germany.description",
        version: "0",
        website: "https://www.kippwerk.de/de/my-account/order/list",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4458684.jpg",
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
        loginUrl: "https://www.kippwerk.de/de/my-account/order/list",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(HeinrichKippWerkGermanyCollector.CONFIG);
    }
}
