
import { SketchCollector } from '../../sketchCollector';

export class SatellicCollector extends SketchCollector {

    static CONFIG = {
        id: "satellic",
        name: "Satellic",
        description: "i18n.collectors.satellic.description",
        version: "0",
        website: "https://rup.satellic.be/rup/login?wicket-crypt=ZNKDKzsV46U",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/809089.jpg",
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
        entryUrl: "https://rup.satellic.be/rup/login?wicket-crypt=ZNKDKzsV46U",
    }

    constructor() {
        super(SatellicCollector.CONFIG);
    }
}
