
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class WhatismybrowserComCollector extends SketchCollector {

    static CONFIG = {
        id: "whatismybrowser_com",
        name: "WhatIsMyBrowser.com",
        description: "i18n.collectors.whatismybrowser_com.description",
        version: "0",
        website: "https://accounts.whatismybrowser.com/admin/account/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/24115.jpg",
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
        loginUrl: "https://accounts.whatismybrowser.com/admin/account/invoices",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WhatismybrowserComCollector.CONFIG);
    }
}
