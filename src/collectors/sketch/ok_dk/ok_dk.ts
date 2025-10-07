
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class OkDkCollector extends SketchCollector {

    static CONFIG = {
        id: "ok_dk",
        name: "OK dk",
        description: "i18n.collectors.ok_dk.description",
        version: "0",
        website: "https://min.ok.dk/min-ok-forside/login/#/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/21973.jpg",
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
        entryUrl: "https://min.ok.dk/min-ok-forside/login/#/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OkDkCollector.CONFIG);
    }
}
