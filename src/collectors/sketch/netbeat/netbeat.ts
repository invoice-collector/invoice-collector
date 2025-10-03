
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class NetbeatCollector extends SketchCollector {

    static CONFIG = {
        id: "netbeat",
        name: "netbeat",
        description: "i18n.collectors.netbeat.description",
        version: "0",
        website: "https://www.netbeat.de/kundencenter/daten/rechnungsuebersicht.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4717.jpg",
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
        entryUrl: "https://www.netbeat.de/kundencenter/daten/rechnungsuebersicht.html",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(NetbeatCollector.CONFIG);
    }
}
