
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FoliateamCollector extends SketchCollector {

    static CONFIG = {
        id: "foliateam",
        name: "Foliateam",
        description: "i18n.collectors.foliateam.description",
        version: "0",
        website: "https://espace-client.foliateam.com/invoice/listing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4417480.jpg",
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
        entryUrl: "https://espace-client.foliateam.com/invoice/listing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FoliateamCollector.CONFIG);
    }
}
