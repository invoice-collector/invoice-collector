
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class NeotouchByQuadientCollector extends SketchCollector {

    static CONFIG = {
        id: "neotouch_by_quadient",
        name: "NEOTOUCH By Quadient",
        description: "i18n.collectors.neotouch_by_quadient.description",
        version: "0",
        website: "https://we4.neotouch.quadient.com/ondemand/webaccess/CustomerLogon.aspx?server=W23&skin=NeoTouch&lang=fr&uid=7B756A4E7D503E5424256B523A6C&user=j0t0001&TestCookie=1",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1645326.jpg",
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
        loginUrl: "https://we4.neotouch.quadient.com/ondemand/webaccess/CustomerLogon.aspx?server=W23&skin=NeoTouch&lang=fr&uid=7B756A4E7D503E5424256B523A6C&user=j0t0001&TestCookie=1",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(NeotouchByQuadientCollector.CONFIG);
    }
}
