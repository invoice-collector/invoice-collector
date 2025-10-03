
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ShirtKingCollector extends SketchCollector {

    static CONFIG = {
        id: "shirt_king",
        name: "Shirt-King",
        description: "i18n.collectors.shirt_king.description",
        version: "0",
        website: "https://connect.shirt-king.de/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2767737.jpg",
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
        entryUrl: "https://connect.shirt-king.de/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ShirtKingCollector.CONFIG);
    }
}
