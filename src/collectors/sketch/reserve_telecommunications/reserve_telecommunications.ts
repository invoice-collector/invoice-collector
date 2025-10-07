
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ReserveTelecommunicationsCollector extends SketchCollector {

    static CONFIG = {
        id: "reserve_telecommunications",
        name: "Reserve Telecommunications",
        description: "i18n.collectors.reserve_telecommunications.description",
        version: "0",
        website: "https://rtconline.smarthub.coop/Login.html#login:",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/87748.jpg",
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
        entryUrl: "https://rtconline.smarthub.coop/Login.html#login:",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ReserveTelecommunicationsCollector.CONFIG);
    }
}
