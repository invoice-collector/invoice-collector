
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class RockautoCollector extends SketchCollector {

    static CONFIG = {
        id: "rockauto",
        name: "RockAuto",
        description: "i18n.collectors.rockauto.description",
        version: "0",
        website: "https://www.rockauto.com/orderstatus/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4375470.jpg",
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
        entryUrl: "https://www.rockauto.com/orderstatus/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RockautoCollector.CONFIG);
    }
}
