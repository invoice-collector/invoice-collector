
import { SketchCollector } from '../../sketchCollector';

export class TotalCardsOnlineCollector extends SketchCollector {

    static CONFIG = {
        id: "total_cards_online",
        name: "Total Cards Online",
        description: "i18n.collectors.total_cards_online.description",
        version: "0",
        website: "https://cardsonline.totalenergies.de/secure/accueil.do",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1540060.jpg",
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
        entryUrl: "https://cardsonline.totalenergies.de/secure/accueil.do",
    }

    constructor() {
        super(TotalCardsOnlineCollector.CONFIG);
    }
}
