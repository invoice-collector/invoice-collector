
import { SketchCollector } from '../../sketchCollector';

export class MedionCollector extends SketchCollector {

    static CONFIG = {
        id: "medion",
        name: "MEDION",
        description: "i18n.collectors.medion.description",
        version: "0",
        website: "https://www.medion.com/de/shop/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/85857.jpg",
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
        entryUrl: "https://www.medion.com/de/shop/login",
    }

    constructor() {
        super(MedionCollector.CONFIG);
    }
}
