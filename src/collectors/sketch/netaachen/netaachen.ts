
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class NetaachenCollector extends SketchCollector {

    static CONFIG = {
        id: "netaachen",
        name: "NetAachen",
        description: "i18n.collectors.netaachen.description",
        version: "0",
        website: "https://onlineservice.netcologne.de/portal/customer/invoice.htm",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/413900.jpg",
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
        loginUrl: "https://onlineservice.netcologne.de/portal/customer/invoice.htm",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(NetaachenCollector.CONFIG);
    }
}
