
import { SketchCollector } from '../../sketchCollector';

export class BueroBedarfThueringenCollector extends SketchCollector {

    static CONFIG = {
        id: "buero_bedarf_thueringen",
        name: "Buero-Bedarf-Thueringen",
        description: "i18n.collectors.buero_bedarf_thueringen.description",
        version: "0",
        website: "https://www.buero-bedarf-thueringen.de/mein-Konto",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/47281.jpg",
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
        entryUrl: "https://www.buero-bedarf-thueringen.de/mein-Konto",
    }

    constructor() {
        super(BueroBedarfThueringenCollector.CONFIG);
    }
}
