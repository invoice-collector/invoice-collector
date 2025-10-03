
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PremierGlobalServicesCollector extends SketchCollector {

    static CONFIG = {
        id: "premier_global_services",
        name: "Premier Global Services",
        description: "i18n.collectors.premier_global_services.description",
        version: "0",
        website: "http://www.pgi.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8991.jpg",
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
        entryUrl: "http://www.pgi.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PremierGlobalServicesCollector.CONFIG);
    }
}
