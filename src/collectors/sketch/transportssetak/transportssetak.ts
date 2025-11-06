import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TransportsSetakCollector extends SketchCollector {

    static CONFIG = {
        id: "transportssetak",
        name: "Transports Setak",
        description: "i18n.collectors.transportssetak.description",
        version: "0",
        website: "https://transports-setak.com",
        logo: "https://transports-setak.com/wp-content/uploads/2023/04/logo-setak.png",
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
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TransportsSetakCollector.CONFIG);
    }
}
