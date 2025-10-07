
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ServerprofisCollector extends SketchCollector {

    static CONFIG = {
        id: "serverprofis",
        name: "serverprofis",
        description: "i18n.collectors.serverprofis.description",
        version: "0",
        website: "https://service.serverprofis.net",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/10492.jpg",
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
        entryUrl: "https://service.serverprofis.net",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ServerprofisCollector.CONFIG);
    }
}
