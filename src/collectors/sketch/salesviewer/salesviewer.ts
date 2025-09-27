
import { SketchCollector } from '../../sketchCollector';

export class SalesviewerCollector extends SketchCollector {

    static CONFIG = {
        id: "salesviewer",
        name: "SalesViewer",
        description: "i18n.collectors.salesviewer.description",
        version: "0",
        website: "https://app.salesviewer.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/66239.jpg",
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
        entryUrl: "https://app.salesviewer.com/login",
    }

    constructor() {
        super(SalesviewerCollector.CONFIG);
    }
}
