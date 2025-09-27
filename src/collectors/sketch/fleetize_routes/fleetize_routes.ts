
import { SketchCollector } from '../../sketchCollector';

export class FleetizeRoutesCollector extends SketchCollector {

    static CONFIG = {
        id: "fleetize_routes",
        name: "Fleetize - Routes",
        description: "i18n.collectors.fleetize_routes.description",
        version: "0",
        website: "https://routes.fleetize.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/25330.jpg",
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
        entryUrl: "https://routes.fleetize.com/",
    }

    constructor() {
        super(FleetizeRoutesCollector.CONFIG);
    }
}
