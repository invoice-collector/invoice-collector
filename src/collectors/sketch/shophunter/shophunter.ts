
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ShophunterCollector extends SketchCollector {

    static CONFIG = {
        id: "shophunter",
        name: "Shophunter",
        description: "i18n.collectors.shophunter.description",
        version: "0",
        website: "https://www.shophunter.io/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1919760.jpg",
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
        entryUrl: "https://www.shophunter.io/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ShophunterCollector.CONFIG);
    }
}
