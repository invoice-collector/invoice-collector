
import { SketchCollector } from '../../sketchCollector';

export class BoltFleetCollector extends SketchCollector {

    static CONFIG = {
        id: "bolt_fleet",
        name: "Bolt Fleet",
        description: "i18n.collectors.bolt_fleet.description",
        version: "0",
        website: "https://fleets.bolt.eu/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4175892.jpg",
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
        entryUrl: "https://fleets.bolt.eu/login",
    }

    constructor() {
        super(BoltFleetCollector.CONFIG);
    }
}
