
import { SketchCollector } from '../../sketchCollector';

export class CalCollector extends SketchCollector {

    static CONFIG = {
        id: "cal",
        name: "Cal",
        description: "i18n.collectors.cal.description",
        version: "0",
        website: "https://app.cal.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4427096.jpg",
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
        entryUrl: "https://app.cal.com/",
    }

    constructor() {
        super(CalCollector.CONFIG);
    }
}
