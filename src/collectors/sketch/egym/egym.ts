
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EgymCollector extends SketchCollector {

    static CONFIG = {
        id: "egym",
        name: "EGYM",
        description: "i18n.collectors.egym.description",
        version: "0",
        website: "https://www.egym.com/mvc/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/779222.jpg",
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
        entryUrl: "https://www.egym.com/mvc/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EgymCollector.CONFIG);
    }
}
