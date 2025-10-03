
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class NobisDesignCollector extends SketchCollector {

    static CONFIG = {
        id: "nobis_design",
        name: "Nobis Design",
        description: "i18n.collectors.nobis_design.description",
        version: "0",
        website: "https://www.nobisdesign.de/account/order",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2739290.jpg",
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
        entryUrl: "https://www.nobisdesign.de/account/order",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(NobisDesignCollector.CONFIG);
    }
}
