
import { SketchCollector } from '../../sketchCollector';

export class PCardMeinContiparkCollector extends SketchCollector {

    static CONFIG = {
        id: "p_card_mein_contipark",
        name: "P Card mein Contipark",
        description: "i18n.collectors.p_card_mein_contipark.description",
        version: "0",
        website: "https://pcard.mein-contipark.de/konto/transaktionen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1301874.jpg",
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
        entryUrl: "https://pcard.mein-contipark.de/konto/transaktionen",
    }

    constructor() {
        super(PCardMeinContiparkCollector.CONFIG);
    }
}
