
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BradfordsBuildingSuppliesCollector extends SketchCollector {

    static CONFIG = {
        id: "bradfords_building_supplies",
        name: "Bradfords Building Supplies",
        description: "i18n.collectors.bradfords_building_supplies.description",
        version: "0",
        website: "https://www.bradfords.co.uk/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/423626.jpg",
        type: CollectorType.SKETCH,
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
        loginUrl: "https://www.bradfords.co.uk/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(BradfordsBuildingSuppliesCollector.CONFIG);
    }
}
