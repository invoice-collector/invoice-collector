
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MarkeroCollector extends SketchCollector {

    static CONFIG = {
        id: "markero",
        name: "Markero",
        description: "i18n.collectors.markero.description",
        version: "0",
        website: "https://app.markero.com/auth/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4210247.jpg",
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
        entryUrl: "https://app.markero.com/auth/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MarkeroCollector.CONFIG);
    }
}
