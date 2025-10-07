
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WebexCollector extends SketchCollector {

    static CONFIG = {
        id: "webex",
        name: "WebEx",
        description: "i18n.collectors.webex.description",
        version: "0",
        website: "https://support.webex.com/MyAccountWeb/invoice.do?root=My&parent=invoice&child=invPayHist",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/543.jpg",
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
        entryUrl: "https://support.webex.com/MyAccountWeb/invoice.do?root=My&parent=invoice&child=invPayHist",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WebexCollector.CONFIG);
    }
}
