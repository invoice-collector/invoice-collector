
import { SketchCollector } from '../../sketchCollector';

export class MatoomaCollector extends SketchCollector {

    static CONFIG = {
        id: "matooma",
        name: "Matooma",
        description: "i18n.collectors.matooma.description",
        version: "0",
        website: "https://m2mmanager.matooma.com/en/home/offers-management/bills",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/221885.jpg",
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
        entryUrl: "https://m2mmanager.matooma.com/en/home/offers-management/bills",
    }

    constructor() {
        super(MatoomaCollector.CONFIG);
    }
}
