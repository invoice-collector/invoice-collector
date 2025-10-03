
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AzubiheftCollector extends SketchCollector {

    static CONFIG = {
        id: "azubiheft",
        name: "Azubiheft",
        description: "i18n.collectors.azubiheft.description",
        version: "0",
        website: "https://www.azubiheft.de/Login.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/64962.jpg",
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
        entryUrl: "https://www.azubiheft.de/Login.aspx",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AzubiheftCollector.CONFIG);
    }
}
