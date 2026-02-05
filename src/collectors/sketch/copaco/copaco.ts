
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CopacoCollector extends SketchCollector {

    static CONFIG = {
        id: "copaco",
        name: "Copaco",
        description: "i18n.collectors.copaco.description",
        version: "0",
        website: "https://www.copaco.com/webshop/shop_paginas/cmsredirect.jsp?d=1&redir=https%3A%2F%2Fwww.copaco.com%2Fwelkom%2F",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32302.jpg",
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
        loginUrl: "https://www.copaco.com/webshop/shop_paginas/cmsredirect.jsp?d=1&redir=https%3A%2F%2Fwww.copaco.com%2Fwelkom%2F",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(CopacoCollector.CONFIG);
    }
}
