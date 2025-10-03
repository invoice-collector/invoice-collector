
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SchunkCollector extends SketchCollector {

    static CONFIG = {
        id: "schunk",
        name: "Schunk",
        description: "i18n.collectors.schunk.description",
        version: "0",
        website: "https://iseg.schunck.es/oskar/views/seg/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4484525.jpg",
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
        entryUrl: "https://iseg.schunck.es/oskar/views/seg/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SchunkCollector.CONFIG);
    }
}
