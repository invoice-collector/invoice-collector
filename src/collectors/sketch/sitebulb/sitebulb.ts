
import { SketchCollector } from '../../sketchCollector';

export class SitebulbCollector extends SketchCollector {

    static CONFIG = {
        id: "sitebulb",
        name: "Sitebulb",
        description: "i18n.collectors.sitebulb.description",
        version: "0",
        website: "https://my.paddle.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/239870.jpg",
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
        entryUrl: "https://my.paddle.com/",
    }

    constructor() {
        super(SitebulbCollector.CONFIG);
    }
}
