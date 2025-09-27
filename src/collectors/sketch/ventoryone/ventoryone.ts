
import { SketchCollector } from '../../sketchCollector';

export class VentoryoneCollector extends SketchCollector {

    static CONFIG = {
        id: "ventoryone",
        name: "VentoryOne",
        description: "i18n.collectors.ventoryone.description",
        version: "0",
        website: "https://app.ventoryone.com/users/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/770490.jpg",
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
        entryUrl: "https://app.ventoryone.com/users/login/",
    }

    constructor() {
        super(VentoryoneCollector.CONFIG);
    }
}
