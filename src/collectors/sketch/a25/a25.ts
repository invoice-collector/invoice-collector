
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class A25Collector extends SketchCollector {

    static CONFIG = {
        id: "a25",
        name: "A25",
        description: "i18n.collectors.a25.description",
        version: "0",
        website: "https://www.a25csc.com/facture/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/71764.jpg",
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
        entryUrl: "https://www.a25csc.com/facture/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(A25Collector.CONFIG);
    }
}
