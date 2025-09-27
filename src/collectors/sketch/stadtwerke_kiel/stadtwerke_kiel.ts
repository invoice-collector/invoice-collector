
import { SketchCollector } from '../../sketchCollector';

export class StadtwerkeKielCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtwerke_kiel",
        name: "Stadtwerke Kiel",
        description: "i18n.collectors.stadtwerke_kiel.description",
        version: "0",
        website: "https://onlineservices.stadtwerke-kiel.de/onlineservices/page/postfach.xhtml?conversationContext=1",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/549882.jpg",
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
        entryUrl: "https://onlineservices.stadtwerke-kiel.de/onlineservices/page/postfach.xhtml?conversationContext=1",
    }

    constructor() {
        super(StadtwerkeKielCollector.CONFIG);
    }
}
