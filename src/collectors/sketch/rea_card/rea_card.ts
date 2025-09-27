
import { SketchCollector } from '../../sketchCollector';

export class ReaCardCollector extends SketchCollector {

    static CONFIG = {
        id: "rea_card",
        name: "Rea Card",
        description: "i18n.collectors.rea_card.description",
        version: "0",
        website: "https://www.rea-service.de/main/de/forward.jsp",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/221834.jpg",
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
        entryUrl: "https://www.rea-service.de/main/de/forward.jsp",
    }

    constructor() {
        super(ReaCardCollector.CONFIG);
    }
}
