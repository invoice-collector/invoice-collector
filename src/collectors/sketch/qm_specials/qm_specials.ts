
import { SketchCollector } from '../../sketchCollector';

export class QmSpecialsCollector extends SketchCollector {

    static CONFIG = {
        id: "qm_specials",
        name: "QM Specials",
        description: "i18n.collectors.qm_specials.description",
        version: "0",
        website: "https://www.qmspecials.ie/home.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/408121.jpg",
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
        entryUrl: "https://www.qmspecials.ie/home.html",
    }

    constructor() {
        super(QmSpecialsCollector.CONFIG);
    }
}
