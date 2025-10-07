
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GogetsslCollector extends SketchCollector {

    static CONFIG = {
        id: "gogetssl",
        name: "GoGetSSL",
        description: "i18n.collectors.gogetssl.description",
        version: "0",
        website: "https://my.gogetssl.com/en/user/invoices/all/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/103876.jpg",
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
        entryUrl: "https://my.gogetssl.com/en/user/invoices/all/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GogetsslCollector.CONFIG);
    }
}
