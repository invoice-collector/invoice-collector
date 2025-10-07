
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class NominaliaCollector extends SketchCollector {

    static CONFIG = {
        id: "nominalia",
        name: "nominalia",
        description: "i18n.collectors.nominalia.description",
        version: "0",
        website: "https://controlpanel.nominalia.com/welcome.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8741.jpg",
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
        entryUrl: "https://controlpanel.nominalia.com/welcome.html",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(NominaliaCollector.CONFIG);
    }
}
