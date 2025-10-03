
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WirmachendruckCollector extends SketchCollector {

    static CONFIG = {
        id: "wirmachendruck",
        name: "WIRmachenDRUCK",
        description: "i18n.collectors.wirmachendruck.description",
        version: "0",
        website: "https://www.wir-machen-druck.de/konto_tracking_list.htm",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7906.jpg",
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
        entryUrl: "https://www.wir-machen-druck.de/konto_tracking_list.htm",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WirmachendruckCollector.CONFIG);
    }
}
