
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BusymouseCollector extends SketchCollector {

    static CONFIG = {
        id: "busymouse",
        name: "Busymouse",
        description: "i18n.collectors.busymouse.description",
        version: "0",
        website: "https://cp1.busymouse.de/Default.aspx?pid=Login&ReturnUrl=%2f",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1091358.jpg",
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
        entryUrl: "https://cp1.busymouse.de/Default.aspx?pid=Login&ReturnUrl=%2f",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BusymouseCollector.CONFIG);
    }
}
