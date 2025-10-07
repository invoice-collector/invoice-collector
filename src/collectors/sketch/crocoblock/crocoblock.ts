
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CrocoblockCollector extends SketchCollector {

    static CONFIG = {
        id: "crocoblock",
        name: "Crocoblock",
        description: "i18n.collectors.crocoblock.description",
        version: "0",
        website: "https://account.crocoblock.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2105955.jpg",
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
        entryUrl: "https://account.crocoblock.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CrocoblockCollector.CONFIG);
    }
}
