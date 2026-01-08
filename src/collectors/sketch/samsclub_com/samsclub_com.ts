
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SamsclubComCollector extends SketchCollector {

    static CONFIG = {
        id: "samsclub_com",
        name: "samsclub.com",
        description: "i18n.collectors.samsclub_com.description",
        version: "0",
        website: "https://www.samsclub.com/sams/account/signin/login.jsp?xid=hdr_account_login&redirectURL=%2Fsams%2Fhomepage.jsp",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9605.jpg",
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
        loginUrl: "https://www.samsclub.com/sams/account/signin/login.jsp?xid=hdr_account_login&redirectURL=%2Fsams%2Fhomepage.jsp",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SamsclubComCollector.CONFIG);
    }
}
