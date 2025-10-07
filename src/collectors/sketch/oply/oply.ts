
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class OplyCollector extends SketchCollector {

    static CONFIG = {
        id: "oply",
        name: "Oply",
        description: "i18n.collectors.oply.description",
        version: "0",
        website: "https://myspace.oply.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/122446.jpg",
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
        entryUrl: "https://myspace.oply.com/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OplyCollector.CONFIG);
    }
}
