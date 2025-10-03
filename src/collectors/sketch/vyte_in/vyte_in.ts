
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class VyteInCollector extends SketchCollector {

    static CONFIG = {
        id: "vyte_in",
        name: "VYTE.in",
        description: "i18n.collectors.vyte_in.description",
        version: "0",
        website: "https://www.vyte.in/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/236255.jpg",
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
        entryUrl: "https://www.vyte.in/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VyteInCollector.CONFIG);
    }
}
