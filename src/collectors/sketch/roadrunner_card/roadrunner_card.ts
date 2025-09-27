
import { SketchCollector } from '../../sketchCollector';

export class RoadrunnerCardCollector extends SketchCollector {

    static CONFIG = {
        id: "roadrunner_card",
        name: "Roadrunner-Card",
        description: "i18n.collectors.roadrunner_card.description",
        version: "0",
        website: "https://kundenportal.roadrunner-card.com/kundenbereich.php?bc=rechnungen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/120328.jpg",
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
        entryUrl: "https://kundenportal.roadrunner-card.com/kundenbereich.php?bc=rechnungen",
    }

    constructor() {
        super(RoadrunnerCardCollector.CONFIG);
    }
}
