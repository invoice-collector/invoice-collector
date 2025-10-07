
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DigidipCollector extends SketchCollector {

    static CONFIG = {
        id: "digidip",
        name: "digidip",
        description: "i18n.collectors.digidip.description",
        version: "0",
        website: "https://www.digidip.net/publisher/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9519.jpg",
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
        entryUrl: "https://www.digidip.net/publisher/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DigidipCollector.CONFIG);
    }
}
