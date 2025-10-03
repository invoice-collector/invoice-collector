
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EasyjetCollector extends SketchCollector {

    static CONFIG = {
        id: "easyjet",
        name: "easyJet",
        description: "i18n.collectors.easyjet.description",
        version: "0",
        website: "https://www.easyjet.com/DE/secure/MyEasyJet.mvc/ViewBooking",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1218.jpg",
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
        entryUrl: "https://www.easyjet.com/DE/secure/MyEasyJet.mvc/ViewBooking",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EasyjetCollector.CONFIG);
    }
}
