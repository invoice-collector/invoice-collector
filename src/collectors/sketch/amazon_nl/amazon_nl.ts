
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AmazonNlCollector extends SketchCollector {

    static CONFIG = {
        id: "amazon_nl",
        name: "Amazon (.nl)",
        description: "i18n.collectors.amazon_nl.description",
        version: "0",
        website: "https://www.amazon.nl/ap/signin?_encoding=UTF8&ignoreAuthState=1&openid.assoc_handle=nlflex&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&ope",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/20302.jpg",
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
        loginUrl: "https://www.amazon.nl/ap/signin?_encoding=UTF8&ignoreAuthState=1&openid.assoc_handle=nlflex&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&ope",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(AmazonNlCollector.CONFIG);
    }
}
