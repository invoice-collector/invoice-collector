
import { SketchCollector } from '../../sketchCollector';

export class CleverlohnCollector extends SketchCollector {

    static CONFIG = {
        id: "cleverlohn",
        name: "cleverlohn",
        description: "i18n.collectors.cleverlohn.description",
        version: "0",
        website: "https://app.cleverlohn.de/employer/CF2bkoTSOyQTQSqmxS51/settings/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2220172.jpg",
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
        entryUrl: "https://app.cleverlohn.de/employer/CF2bkoTSOyQTQSqmxS51/settings/billing",
    }

    constructor() {
        super(CleverlohnCollector.CONFIG);
    }
}
