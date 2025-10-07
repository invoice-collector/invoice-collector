
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SBahnBerlinAboOnlineCollector extends SketchCollector {

    static CONFIG = {
        id: "s_bahn_berlin_abo_online",
        name: "S-Bahn Berlin - Abo Online",
        description: "i18n.collectors.s_bahn_berlin_abo_online.description",
        version: "0",
        website: "https://www.abo-antrag.de/de/sites/Postfach/Default.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4438586.jpg",
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
        entryUrl: "https://www.abo-antrag.de/de/sites/Postfach/Default.aspx",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SBahnBerlinAboOnlineCollector.CONFIG);
    }
}
