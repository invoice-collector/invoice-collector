
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class OpodoCollector extends SketchCollector {

    static CONFIG = {
        id: "opodo",
        name: "Opodo",
        description: "i18n.collectors.opodo.description",
        version: "0",
        website: "https://www.opodo.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1198.jpg",
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
        entryUrl: "https://www.opodo.de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OpodoCollector.CONFIG);
    }
}
