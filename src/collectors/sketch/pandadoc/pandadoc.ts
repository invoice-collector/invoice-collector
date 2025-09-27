
import { SketchCollector } from '../../sketchCollector';

export class PandadocCollector extends SketchCollector {

    static CONFIG = {
        id: "pandadoc",
        name: "Pandadoc",
        description: "i18n.collectors.pandadoc.description",
        version: "0",
        website: "https://app.pandadoc.com/login/?next=/a/#/dashboard/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/28141.jpg",
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
        entryUrl: "https://app.pandadoc.com/login/?next=/a/#/dashboard/",
    }

    constructor() {
        super(PandadocCollector.CONFIG);
    }
}
