
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class NorthflankCollector extends SketchCollector {

    static CONFIG = {
        id: "northflank",
        name: "Northflank",
        description: "i18n.collectors.northflank.description",
        version: "0",
        website: "https://app.northflank.com/t/botanica-studios/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2519922.jpg",
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
        entryUrl: "https://app.northflank.com/t/botanica-studios/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(NorthflankCollector.CONFIG);
    }
}
