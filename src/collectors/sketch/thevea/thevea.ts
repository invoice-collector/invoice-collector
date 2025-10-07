
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TheveaCollector extends SketchCollector {

    static CONFIG = {
        id: "thevea",
        name: "Thevea",
        description: "i18n.collectors.thevea.description",
        version: "0",
        website: "https://thevea.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4568620.jpg",
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
        entryUrl: "https://thevea.de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TheveaCollector.CONFIG);
    }
}
