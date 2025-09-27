
import { SketchCollector } from '../../sketchCollector';

export class DutchleaseCollector extends SketchCollector {

    static CONFIG = {
        id: "dutchlease",
        name: "DutchLease",
        description: "i18n.collectors.dutchlease.description",
        version: "0",
        website: "https://dutchlease.fleetplatform.com/FleetPlatform/s:nl_NL/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32720.jpg",
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
        entryUrl: "https://dutchlease.fleetplatform.com/FleetPlatform/s:nl_NL/login",
    }

    constructor() {
        super(DutchleaseCollector.CONFIG);
    }
}
