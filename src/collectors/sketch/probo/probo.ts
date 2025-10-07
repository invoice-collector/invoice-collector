
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ProboCollector extends SketchCollector {

    static CONFIG = {
        id: "probo",
        name: "Probo",
        description: "i18n.collectors.probo.description",
        version: "0",
        website: "https://www.probo.de/myaccount/invoice/index/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2254827.jpg",
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
        entryUrl: "https://www.probo.de/myaccount/invoice/index/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ProboCollector.CONFIG);
    }
}
