
import { SketchCollector } from '../../sketchCollector';

export class PlectoCollector extends SketchCollector {

    static CONFIG = {
        id: "plecto",
        name: "Plecto",
        description: "i18n.collectors.plecto.description",
        version: "0",
        website: "https://app.plecto.com/admin/billing/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1202072.jpg",
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
        entryUrl: "https://app.plecto.com/admin/billing/",
    }

    constructor() {
        super(PlectoCollector.CONFIG);
    }
}
