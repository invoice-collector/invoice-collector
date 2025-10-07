
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CharlotteTilburyCollector extends SketchCollector {

    static CONFIG = {
        id: "charlotte_tilbury",
        name: "Charlotte Tilbury",
        description: "i18n.collectors.charlotte_tilbury.description",
        version: "0",
        website: "https://www.charlottetilbury.com/de/account/orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3006226.jpg",
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
        entryUrl: "https://www.charlottetilbury.com/de/account/orders",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CharlotteTilburyCollector.CONFIG);
    }
}
