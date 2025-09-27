
import { SketchCollector } from '../../sketchCollector';

export class ServiparkCollector extends SketchCollector {

    static CONFIG = {
        id: "servipark",
        name: "Servipark",
        description: "i18n.collectors.servipark.description",
        version: "0",
        website: "https://www.servipark.com/de/shopping/AccountLogin.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/14254.jpg",
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
        entryUrl: "https://www.servipark.com/de/shopping/AccountLogin.aspx",
    }

    constructor() {
        super(ServiparkCollector.CONFIG);
    }
}
