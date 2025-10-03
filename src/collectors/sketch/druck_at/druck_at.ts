
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DruckAtCollector extends SketchCollector {

    static CONFIG = {
        id: "druck_at",
        name: "Druck.at",
        description: "i18n.collectors.druck_at.description",
        version: "0",
        website: "https://www.druck.at/user/tracking/?type=invoice#/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/6639.jpg",
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
        entryUrl: "https://www.druck.at/user/tracking/?type=invoice#/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DruckAtCollector.CONFIG);
    }
}
