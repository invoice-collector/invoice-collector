
import { SketchCollector } from '../../sketchCollector';

export class CallABikeCollector extends SketchCollector {

    static CONFIG = {
        id: "call_a_bike",
        name: "Call a Bike",
        description: "i18n.collectors.call_a_bike.description",
        version: "0",
        website: "https://www.callabike.de/de/kundenbereich/rechnungsubersicht",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9656.jpg",
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
        entryUrl: "https://www.callabike.de/de/kundenbereich/rechnungsubersicht",
    }

    constructor() {
        super(CallABikeCollector.CONFIG);
    }
}
