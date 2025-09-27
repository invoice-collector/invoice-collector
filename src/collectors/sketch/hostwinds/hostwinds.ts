
import { SketchCollector } from '../../sketchCollector';

export class HostwindsCollector extends SketchCollector {

    static CONFIG = {
        id: "hostwinds",
        name: "Hostwinds",
        description: "i18n.collectors.hostwinds.description",
        version: "0",
        website: "https://clients.hostwinds.com/clientarea.php?_ga=2.94389849.438283618.1636343183-124337738.1636203898",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/988600.jpg",
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
        entryUrl: "https://clients.hostwinds.com/clientarea.php?_ga=2.94389849.438283618.1636343183-124337738.1636203898",
    }

    constructor() {
        super(HostwindsCollector.CONFIG);
    }
}
