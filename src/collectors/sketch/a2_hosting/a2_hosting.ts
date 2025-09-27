
import { SketchCollector } from '../../sketchCollector';

export class A2HostingCollector extends SketchCollector {

    static CONFIG = {
        id: "a2_hosting",
        name: "A2 Hosting",
        description: "i18n.collectors.a2_hosting.description",
        version: "0",
        website: "https://my.a2hosting.com/clientarea.php?_ga=2.227661019.717146942.1523598768-1113095136.1523598768",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8908.jpg",
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
        entryUrl: "https://my.a2hosting.com/clientarea.php?_ga=2.227661019.717146942.1523598768-1113095136.1523598768",
    }

    constructor() {
        super(A2HostingCollector.CONFIG);
    }
}
