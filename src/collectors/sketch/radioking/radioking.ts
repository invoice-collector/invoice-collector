
import { SketchCollector } from '../../sketchCollector';

export class RadiokingCollector extends SketchCollector {

    static CONFIG = {
        id: "radioking",
        name: "RadioKing",
        description: "i18n.collectors.radioking.description",
        version: "0",
        website: "https://www.radioking.com/on/clientarea.php?action=invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/511295.jpg",
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
        entryUrl: "https://www.radioking.com/on/clientarea.php?action=invoices",
    }

    constructor() {
        super(RadiokingCollector.CONFIG);
    }
}
