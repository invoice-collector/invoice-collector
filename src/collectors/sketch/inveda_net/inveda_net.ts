
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class InvedaNetCollector extends SketchCollector {

    static CONFIG = {
        id: "inveda_net",
        name: "inveda,net",
        description: "i18n.collectors.inveda_net.description",
        version: "0",
        website: "https://secure.inveda.net/system.user.user.rechnungen.html?RechnungenBox[fad_t_limit]=-1",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1745246.jpg",
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
        loginUrl: "https://secure.inveda.net/system.user.user.rechnungen.html?RechnungenBox[fad_t_limit]=-1",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(InvedaNetCollector.CONFIG);
    }
}
