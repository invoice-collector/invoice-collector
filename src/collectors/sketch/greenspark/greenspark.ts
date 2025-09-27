
import { SketchCollector } from '../../sketchCollector';

export class GreensparkCollector extends SketchCollector {

    static CONFIG = {
        id: "greenspark",
        name: "Greenspark",
        description: "i18n.collectors.greenspark.description",
        version: "0",
        website: "https://www.app.getgreenspark.com/account?tab=billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4095778.jpg",
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
        entryUrl: "https://www.app.getgreenspark.com/account?tab=billing",
    }

    constructor() {
        super(GreensparkCollector.CONFIG);
    }
}
