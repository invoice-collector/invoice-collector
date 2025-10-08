
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EasyjetCollector extends SketchCollector {

    static CONFIG = {
        id: "easyjet",
        name: "easyJet",
        description: "i18n.collectors.easyjet.description",
        version: "1",
        website: "https://www.easyjet.com/DE/secure/MyEasyJet.mvc/ViewBooking",
        logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/EasyJet_logo.svg",
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
