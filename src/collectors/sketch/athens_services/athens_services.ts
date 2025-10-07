
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AthensServicesCollector extends SketchCollector {

    static CONFIG = {
        id: "athens_services",
        name: "Athens Services",
        description: "i18n.collectors.athens_services.description",
        version: "0",
        website: "https://billing.athensservices.com/webpak/signin.jsp",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4176461.jpg",
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
        entryUrl: "https://billing.athensservices.com/webpak/signin.jsp",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AthensServicesCollector.CONFIG);
    }
}
