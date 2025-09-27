
import { SketchCollector } from '../../sketchCollector';

export class BienIciCollector extends SketchCollector {

    static CONFIG = {
        id: "bien_ici",
        name: "bien\'ici",
        description: "i18n.collectors.bien_ici.description",
        version: "0",
        website: "https://pro.bienici.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/836165.jpg",
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
        entryUrl: "https://pro.bienici.com/",
    }

    constructor() {
        super(BienIciCollector.CONFIG);
    }
}
