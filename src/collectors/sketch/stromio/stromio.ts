
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class StromioCollector extends SketchCollector {

    static CONFIG = {
        id: "stromio",
        name: "Stromio",
        description: "i18n.collectors.stromio.description",
        version: "0",
        website: "https://kundenportal.stromio.de/qpo/portal/stromio/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/15178.jpg",
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
        entryUrl: "https://kundenportal.stromio.de/qpo/portal/stromio/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StromioCollector.CONFIG);
    }
}
