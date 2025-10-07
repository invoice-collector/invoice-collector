
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PvnPeekAndCloppenburgCollector extends SketchCollector {

    static CONFIG = {
        id: "pvn_peek_and_cloppenburg",
        name: "PVN Peek & Cloppenburg",
        description: "i18n.collectors.pvn_peek_and_cloppenburg.description",
        version: "0",
        website: "https://pvn.peek-cloppenburg.de/user-billings.do",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2589995.jpg",
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
        entryUrl: "https://pvn.peek-cloppenburg.de/user-billings.do",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PvnPeekAndCloppenburgCollector.CONFIG);
    }
}
