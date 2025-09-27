
import { SketchCollector } from '../../sketchCollector';

export class LanesAndPlanesCollector extends SketchCollector {

    static CONFIG = {
        id: "lanes_and_planes",
        name: "Lanes & Planes",
        description: "i18n.collectors.lanes_and_planes.description",
        version: "0",
        website: "https://app.lanes-planes.com/admin/#/admin/company/accounting",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/90784.jpg",
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
        entryUrl: "https://app.lanes-planes.com/admin/#/admin/company/accounting",
    }

    constructor() {
        super(LanesAndPlanesCollector.CONFIG);
    }
}
