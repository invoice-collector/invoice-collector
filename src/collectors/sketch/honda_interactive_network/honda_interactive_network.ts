
import { SketchCollector } from '../../sketchCollector';

export class HondaInteractiveNetworkCollector extends SketchCollector {

    static CONFIG = {
        id: "honda_interactive_network",
        name: "Honda - Interactive Network",
        description: "i18n.collectors.honda_interactive_network.description",
        version: "0",
        website: "https://www.in.honda.com/RRAAApps/login/asp/rraalog.asp",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4593286.jpg",
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
        entryUrl: "https://www.in.honda.com/RRAAApps/login/asp/rraalog.asp",
    }

    constructor() {
        super(HondaInteractiveNetworkCollector.CONFIG);
    }
}
