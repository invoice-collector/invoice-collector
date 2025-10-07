
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class JustcallCollector extends SketchCollector {

    static CONFIG = {
        id: "justcall",
        name: "JustCall",
        description: "i18n.collectors.justcall.description",
        version: "0",
        website: "https://justcall.io/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/34065.jpg",
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
        entryUrl: "https://justcall.io/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(JustcallCollector.CONFIG);
    }
}
