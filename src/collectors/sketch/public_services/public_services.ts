
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PublicServicesCollector extends SketchCollector {

    static CONFIG = {
        id: "public_services",
        name: "Public Services",
        description: "i18n.collectors.public_services.description",
        version: "0",
        website: "https://www.girocockpit.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/801660.jpg",
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
        entryUrl: "https://www.girocockpit.de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PublicServicesCollector.CONFIG);
    }
}
