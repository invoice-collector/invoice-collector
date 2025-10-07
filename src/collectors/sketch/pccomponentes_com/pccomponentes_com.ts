
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PccomponentesComCollector extends SketchCollector {

    static CONFIG = {
        id: "pccomponentes_com",
        name: "pccomponentes.com",
        description: "i18n.collectors.pccomponentes_com.description",
        version: "0",
        website: "https://www.pccomponentes.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/49716.jpg",
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
        entryUrl: "https://www.pccomponentes.com/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PccomponentesComCollector.CONFIG);
    }
}
