
import { SketchCollector } from '../../sketchCollector';

export class VoluumComCollector extends SketchCollector {

    static CONFIG = {
        id: "voluum_com",
        name: "Voluum.com",
        description: "i18n.collectors.voluum_com.description",
        version: "0",
        website: "https://panel.voluum.com/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/19672.jpg",
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
        entryUrl: "https://panel.voluum.com/login/",
    }

    constructor() {
        super(VoluumComCollector.CONFIG);
    }
}
