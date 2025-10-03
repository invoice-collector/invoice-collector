
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class JonLoomerCollector extends SketchCollector {

    static CONFIG = {
        id: "jon_loomer",
        name: "Jon Loomer",
        description: "i18n.collectors.jon_loomer.description",
        version: "0",
        website: "https://powerhittersclub.com/invoices/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/245915.jpg",
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
        entryUrl: "https://powerhittersclub.com/invoices/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(JonLoomerCollector.CONFIG);
    }
}
