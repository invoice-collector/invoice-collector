
import { SketchCollector } from '../../sketchCollector';

export class KvbKolnerVerkehrsbetriebeCollector extends SketchCollector {

    static CONFIG = {
        id: "kvb_kolner_verkehrsbetriebe",
        name: "KVB - Kolner Verkehrsbetriebe",
        description: "i18n.collectors.kvb_kolner_verkehrsbetriebe.description",
        version: "0",
        website: "https://kvb.mobilesticket.de/ticketportal/#",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/738651.jpg",
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
        entryUrl: "https://kvb.mobilesticket.de/ticketportal/#",
    }

    constructor() {
        super(KvbKolnerVerkehrsbetriebeCollector.CONFIG);
    }
}
