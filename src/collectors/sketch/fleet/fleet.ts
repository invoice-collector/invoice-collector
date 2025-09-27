
import { SketchCollector } from '../../sketchCollector';

export class FleetCollector extends SketchCollector {

    static CONFIG = {
        id: "fleet",
        name: "Fleet",
        description: "i18n.collectors.fleet.description",
        version: "0",
        website: "https://cockpit.fleet.co/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3134741.jpg",
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
        entryUrl: "https://cockpit.fleet.co/login",
    }

    constructor() {
        super(FleetCollector.CONFIG);
    }
}
