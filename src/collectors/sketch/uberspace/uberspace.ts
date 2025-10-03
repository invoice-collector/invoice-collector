
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class UberspaceCollector extends SketchCollector {

    static CONFIG = {
        id: "uberspace",
        name: "Uberspace",
        description: "i18n.collectors.uberspace.description",
        version: "0",
        website: "https://uberspace.de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/53924.jpg",
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
        entryUrl: "https://uberspace.de/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(UberspaceCollector.CONFIG);
    }
}
