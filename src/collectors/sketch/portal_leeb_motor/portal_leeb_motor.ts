
import { SketchCollector } from '../../sketchCollector';

export class PortalLeebMotorCollector extends SketchCollector {

    static CONFIG = {
        id: "portal_leeb_motor",
        name: "Portal Leeb Motor",
        description: "i18n.collectors.portal_leeb_motor.description",
        version: "0",
        website: "https://portal.leeb-motor.com/Home/InventCheck",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/492187.jpg",
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
        entryUrl: "https://portal.leeb-motor.com/Home/InventCheck",
    }

    constructor() {
        super(PortalLeebMotorCollector.CONFIG);
    }
}
