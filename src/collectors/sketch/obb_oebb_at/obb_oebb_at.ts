
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ObbOebbAtCollector extends SketchCollector {

    static CONFIG = {
        id: "obb_oebb_at",
        name: "OBB - OEBB.at",
        description: "i18n.collectors.obb_oebb_at.description",
        version: "0",
        website: "https://tickets.oebb.at",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/64954.jpg",
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
        entryUrl: "https://tickets.oebb.at",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ObbOebbAtCollector.CONFIG);
    }
}
