
import { SketchCollector } from '../../sketchCollector';

export class SozialFactoringCollector extends SketchCollector {

    static CONFIG = {
        id: "sozial_factoring",
        name: "Sozial Factoring",
        description: "i18n.collectors.sozial_factoring.description",
        version: "0",
        website: "https://app.clever-factoring.de/kunde/einrichtungen/F31179/ankaufpositionen/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2732084.jpg",
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
        entryUrl: "https://app.clever-factoring.de/kunde/einrichtungen/F31179/ankaufpositionen/",
    }

    constructor() {
        super(SozialFactoringCollector.CONFIG);
    }
}
