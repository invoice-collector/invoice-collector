
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HostwayCollector extends SketchCollector {

    static CONFIG = {
        id: "hostway",
        name: "Hostway",
        description: "i18n.collectors.hostway.description",
        version: "0",
        website: "https://hostway.com/sign-in/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9171.jpg",
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
        entryUrl: "https://hostway.com/sign-in/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HostwayCollector.CONFIG);
    }
}
