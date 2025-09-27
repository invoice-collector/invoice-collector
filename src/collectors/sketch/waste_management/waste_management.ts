
import { SketchCollector } from '../../sketchCollector';

export class WasteManagementCollector extends SketchCollector {

    static CONFIG = {
        id: "waste_management",
        name: "Waste Management",
        description: "i18n.collectors.waste_management.description",
        version: "0",
        website: "http://www.wm.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8552.jpg",
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
        entryUrl: "http://www.wm.com",
    }

    constructor() {
        super(WasteManagementCollector.CONFIG);
    }
}
