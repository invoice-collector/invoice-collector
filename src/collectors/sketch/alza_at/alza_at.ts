
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AlzaAtCollector extends SketchCollector {

    static CONFIG = {
        id: "alza_at",
        name: "Alza.at",
        description: "i18n.collectors.alza_at.description",
        version: "0",
        website: "https://www.alza.at/my-account/orders.htm",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4196423.jpg",
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
        entryUrl: "https://www.alza.at/my-account/orders.htm",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AlzaAtCollector.CONFIG);
    }
}
