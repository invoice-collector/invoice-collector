
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class RelogGbrWarendorfCollector extends SketchCollector {

    static CONFIG = {
        id: "relog_gbr_warendorf",
        name: "Relog GbR warendorf",
        description: "i18n.collectors.relog_gbr_warendorf.description",
        version: "0",
        website: "https://services.portal-bereich.de/servicehosts/authority/Account/Login?ReturnUrl=%2Fservicehosts%2Fauthority%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dimplicitportal%26redirect_uri%3Dhttps%253A%252F%252Frelog-lohn-warendorf.portal-bereich.de%252Fhtm",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1355662.jpg",
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
        loginUrl: "https://services.portal-bereich.de/servicehosts/authority/Account/Login?ReturnUrl=%2Fservicehosts%2Fauthority%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dimplicitportal%26redirect_uri%3Dhttps%253A%252F%252Frelog-lohn-warendorf.portal-bereich.de%252Fhtm",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(RelogGbrWarendorfCollector.CONFIG);
    }
}
