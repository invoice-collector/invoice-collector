
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SslsComCollector extends SketchCollector {

    static CONFIG = {
        id: "ssls_com",
        name: "SSLs.com",
        description: "i18n.collectors.ssls_com.description",
        version: "0",
        website: "https://www.ssls.com/user/orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3206328.jpg",
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
        entryUrl: "https://www.ssls.com/user/orders",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SslsComCollector.CONFIG);
    }
}
