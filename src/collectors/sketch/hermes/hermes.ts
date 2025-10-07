
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HermesCollector extends SketchCollector {

    static CONFIG = {
        id: "hermes",
        name: "Hermes",
        description: "i18n.collectors.hermes.description",
        version: "0",
        website: "https://www.hermes-port.de/port/main.jsp?site=1027",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1932182.jpg",
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
        entryUrl: "https://www.hermes-port.de/port/main.jsp?site=1027",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HermesCollector.CONFIG);
    }
}
