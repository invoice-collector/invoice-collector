
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CheapcargoComCollector extends SketchCollector {

    static CONFIG = {
        id: "cheapcargo_com",
        name: "CheapCargo.com",
        description: "i18n.collectors.cheapcargo_com.description",
        version: "0",
        website: "https://www.cheapcargo.com/Users/Login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32747.jpg",
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
        entryUrl: "https://www.cheapcargo.com/Users/Login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CheapcargoComCollector.CONFIG);
    }
}
