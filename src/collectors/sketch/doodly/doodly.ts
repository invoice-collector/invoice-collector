
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DoodlyCollector extends SketchCollector {

    static CONFIG = {
        id: "doodly",
        name: "Doodly",
        description: "i18n.collectors.doodly.description",
        version: "0",
        website: "https://www.doodly.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/739626.jpg",
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
        entryUrl: "https://www.doodly.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DoodlyCollector.CONFIG);
    }
}
