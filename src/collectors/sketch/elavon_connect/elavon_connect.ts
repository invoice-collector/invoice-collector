
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ElavonConnectCollector extends SketchCollector {

    static CONFIG = {
        id: "elavon_connect",
        name: "Elavon Connect",
        description: "i18n.collectors.elavon_connect.description",
        version: "0",
        website: "https://www.elavonconnect.com/ui/#/eu/en_GB/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/189967.jpg",
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
        entryUrl: "https://www.elavonconnect.com/ui/#/eu/en_GB/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ElavonConnectCollector.CONFIG);
    }
}
