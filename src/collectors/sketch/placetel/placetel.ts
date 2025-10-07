
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PlacetelCollector extends SketchCollector {

    static CONFIG = {
        id: "placetel",
        name: "Placetel",
        description: "i18n.collectors.placetel.description",
        version: "0",
        website: "https://web.placetel.de/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4721.jpg",
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
        entryUrl: "https://web.placetel.de/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PlacetelCollector.CONFIG);
    }
}
