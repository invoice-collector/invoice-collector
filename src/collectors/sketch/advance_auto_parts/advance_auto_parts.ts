
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AdvanceAutoPartsCollector extends SketchCollector {

    static CONFIG = {
        id: "advance_auto_parts",
        name: "Advance Auto Parts",
        description: "i18n.collectors.advance_auto_parts.description",
        version: "0",
        website: "https://shop.advanceautoparts.com/web/TrackOrderStatus?storeId=10151&catalogId=10051&langId=-1",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2211142.jpg",
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
        entryUrl: "https://shop.advanceautoparts.com/web/TrackOrderStatus?storeId=10151&catalogId=10051&langId=-1",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AdvanceAutoPartsCollector.CONFIG);
    }
}
