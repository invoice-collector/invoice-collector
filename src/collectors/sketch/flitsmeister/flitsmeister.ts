
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FlitsmeisterCollector extends SketchCollector {

    static CONFIG = {
        id: "flitsmeister",
        name: "Flitsmeister",
        description: "i18n.collectors.flitsmeister.description",
        version: "0",
        website: "https://mijn.flitsmeister.nl/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3139974.jpg",
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
        entryUrl: "https://mijn.flitsmeister.nl/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FlitsmeisterCollector.CONFIG);
    }
}
