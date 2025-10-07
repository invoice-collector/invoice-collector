
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BillwerkCollector extends SketchCollector {

    static CONFIG = {
        id: "billwerk",
        name: "Billwerk",
        description: "i18n.collectors.billwerk.description",
        version: "0",
        website: "http://www.billwerk.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/25331.jpg",
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
        entryUrl: "http://www.billwerk.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BillwerkCollector.CONFIG);
    }
}
