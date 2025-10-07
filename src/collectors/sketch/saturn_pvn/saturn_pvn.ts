
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SaturnPvnCollector extends SketchCollector {

    static CONFIG = {
        id: "saturn_pvn",
        name: "Saturn PVN",
        description: "i18n.collectors.saturn_pvn.description",
        version: "0",
        website: "https://pvn.saturn.de/user-billings.do",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/771832.jpg",
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
        entryUrl: "https://pvn.saturn.de/user-billings.do",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SaturnPvnCollector.CONFIG);
    }
}
