
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ConatyCateringSuppliesCollector extends SketchCollector {

    static CONFIG = {
        id: "conaty_catering_supplies",
        name: "Conaty Catering Supplies",
        description: "i18n.collectors.conaty_catering_supplies.description",
        version: "0",
        website: "https://www.conatycatering.com/index.php?route=extension/account/invoice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2513764.jpg",
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
        entryUrl: "https://www.conatycatering.com/index.php?route=extension/account/invoice",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ConatyCateringSuppliesCollector.CONFIG);
    }
}
