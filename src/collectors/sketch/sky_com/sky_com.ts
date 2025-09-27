
import { SketchCollector } from '../../sketchCollector';

export class SkyComCollector extends SketchCollector {

    static CONFIG = {
        id: "sky_com",
        name: "Sky.com",
        description: "i18n.collectors.sky_com.description",
        version: "0",
        website: "https://myaccount.sky.com/bill",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8749.jpg",
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
        entryUrl: "https://myaccount.sky.com/bill",
    }

    constructor() {
        super(SkyComCollector.CONFIG);
    }
}
