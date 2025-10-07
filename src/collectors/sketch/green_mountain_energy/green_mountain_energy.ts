
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GreenMountainEnergyCollector extends SketchCollector {

    static CONFIG = {
        id: "green_mountain_energy",
        name: "Green Mountain Energy",
        description: "i18n.collectors.green_mountain_energy.description",
        version: "0",
        website: "https://www.businessportal.greenmountain.com/resources/protected/previousBills.htm",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/239875.jpg",
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
        entryUrl: "https://www.businessportal.greenmountain.com/resources/protected/previousBills.htm",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GreenMountainEnergyCollector.CONFIG);
    }
}
