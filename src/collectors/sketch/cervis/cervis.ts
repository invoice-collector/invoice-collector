
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CervisCollector extends SketchCollector {

    static CONFIG = {
        id: "cervis",
        name: "Cervis",
        description: "i18n.collectors.cervis.description",
        version: "0",
        website: "https://desk.cervis.de/Faktura",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1881983.jpg",
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
        entryUrl: "https://desk.cervis.de/Faktura",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CervisCollector.CONFIG);
    }
}
