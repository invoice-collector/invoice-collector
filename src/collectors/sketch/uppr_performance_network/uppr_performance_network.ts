
import { SketchCollector } from '../../sketchCollector';

export class UpprPerformanceNetworkCollector extends SketchCollector {

    static CONFIG = {
        id: "uppr_performance_network",
        name: "uppr Performance Network",
        description: "i18n.collectors.uppr_performance_network.description",
        version: "0",
        website: "https://netzwerk.uppr.de/user-billings.do",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/110057.jpg",
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
        entryUrl: "https://netzwerk.uppr.de/user-billings.do",
    }

    constructor() {
        super(UpprPerformanceNetworkCollector.CONFIG);
    }
}
