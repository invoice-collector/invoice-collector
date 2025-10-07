
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class NetcologneMeineKundenweltCollector extends SketchCollector {

    static CONFIG = {
        id: "netcologne_meine_kundenwelt",
        name: "NetCologne Meine Kundenwelt",
        description: "i18n.collectors.netcologne_meine_kundenwelt.description",
        version: "0",
        website: "https://meinekundenwelt.netcologne.de/rechnungen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2113414.jpg",
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
        entryUrl: "https://meinekundenwelt.netcologne.de/rechnungen",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(NetcologneMeineKundenweltCollector.CONFIG);
    }
}
