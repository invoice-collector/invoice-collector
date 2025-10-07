
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BabyprofiCollector extends SketchCollector {

    static CONFIG = {
        id: "babyprofi",
        name: "Babyprofi",
        description: "i18n.collectors.babyprofi.description",
        version: "0",
        website: "https://www.babyprofi.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/19778.jpg",
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
        entryUrl: "https://www.babyprofi.de",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BabyprofiCollector.CONFIG);
    }
}
