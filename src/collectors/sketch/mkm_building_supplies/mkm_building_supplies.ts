
import { SketchCollector } from '../../sketchCollector';

export class MkmBuildingSuppliesCollector extends SketchCollector {

    static CONFIG = {
        id: "mkm_building_supplies",
        name: "MKM Building Supplies",
        description: "i18n.collectors.mkm_building_supplies.description",
        version: "0",
        website: "https://www.mkmbs.co.uk/templates/mkm/pages/login/login.aspx/?returnurl=/my-account/my-account-landing/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/408107.jpg",
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
        entryUrl: "https://www.mkmbs.co.uk/templates/mkm/pages/login/login.aspx/?returnurl=/my-account/my-account-landing/",
    }

    constructor() {
        super(MkmBuildingSuppliesCollector.CONFIG);
    }
}
