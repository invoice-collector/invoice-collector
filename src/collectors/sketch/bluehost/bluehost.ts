
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BluehostCollector extends SketchCollector {

    static CONFIG = {
        id: "bluehost",
        name: "Bluehost",
        description: "i18n.collectors.bluehost.description",
        version: "0",
        website: "https://my.bluehost.com/web-hosting/cplogin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8611.jpg",
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
        entryUrl: "https://my.bluehost.com/web-hosting/cplogin",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BluehostCollector.CONFIG);
    }
}
