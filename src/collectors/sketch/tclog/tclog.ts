
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TclogCollector extends SketchCollector {

    static CONFIG = {
        id: "tclog",
        name: "TCLOG",
        description: "i18n.collectors.tclog.description",
        version: "0",
        website: "https://www.tclog.eu/profile/invoices/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2710657.jpg",
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
        entryUrl: "https://www.tclog.eu/profile/invoices/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TclogCollector.CONFIG);
    }
}
