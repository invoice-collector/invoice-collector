
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EurosenderCollector extends SketchCollector {

    static CONFIG = {
        id: "eurosender",
        name: "Eurosender",
        description: "i18n.collectors.eurosender.description",
        version: "0",
        website: "https://www.eurosender.com/dashboard/documents",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/46779.jpg",
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
        entryUrl: "https://www.eurosender.com/dashboard/documents",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EurosenderCollector.CONFIG);
    }
}
