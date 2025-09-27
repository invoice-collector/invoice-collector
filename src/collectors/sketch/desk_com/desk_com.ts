
import { SketchCollector } from '../../sketchCollector';

export class DeskComCollector extends SketchCollector {

    static CONFIG = {
        id: "desk_com",
        name: "desk.com",
        description: "i18n.collectors.desk_com.description",
        version: "0",
        website: "https://login.salesforce.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/526.jpg",
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
        entryUrl: "https://login.salesforce.com/",
    }

    constructor() {
        super(DeskComCollector.CONFIG);
    }
}
