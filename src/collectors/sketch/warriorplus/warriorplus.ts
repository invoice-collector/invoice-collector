
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WarriorplusCollector extends SketchCollector {

    static CONFIG = {
        id: "warriorplus",
        name: "Warriorplus",
        description: "i18n.collectors.warriorplus.description",
        version: "0",
        website: "https://warriorplus.com/account/purchases",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1101232.jpg",
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
        entryUrl: "https://warriorplus.com/account/purchases",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WarriorplusCollector.CONFIG);
    }
}
