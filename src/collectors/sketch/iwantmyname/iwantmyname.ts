
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class IwantmynameCollector extends SketchCollector {

    static CONFIG = {
        id: "iwantmyname",
        name: "iwantmyname",
        description: "i18n.collectors.iwantmyname.description",
        version: "0",
        website: "https://iwantmyname.com/dashboard/account/receipts",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/510866.jpg",
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
        entryUrl: "https://iwantmyname.com/dashboard/account/receipts",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(IwantmynameCollector.CONFIG);
    }
}
