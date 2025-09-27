
import { SketchCollector } from '../../sketchCollector';

export class NetResultsCollector extends SketchCollector {

    static CONFIG = {
        id: "net_results",
        name: "Net-Results",
        description: "i18n.collectors.net_results.description",
        version: "0",
        website: "https://www.net-results.com/app/login.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9040.jpg",
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
        entryUrl: "https://www.net-results.com/app/login.php",
    }

    constructor() {
        super(NetResultsCollector.CONFIG);
    }
}
