
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AlbaMullentsorgungCollector extends SketchCollector {

    static CONFIG = {
        id: "alba_mullentsorgung",
        name: "Alba Mullentsorgung",
        description: "i18n.collectors.alba_mullentsorgung.description",
        version: "0",
        website: "https://www.albaclick.de/invoice?customerId=50-9145486",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/433481.jpg",
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
        entryUrl: "https://www.albaclick.de/invoice?customerId=50-9145486",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AlbaMullentsorgungCollector.CONFIG);
    }
}
