
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class OutgrowCollector extends SketchCollector {

    static CONFIG = {
        id: "outgrow",
        name: "outgrow",
        description: "i18n.collectors.outgrow.description",
        version: "0",
        website: "https://outgrow.co/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/662542.jpg",
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
        entryUrl: "https://outgrow.co/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OutgrowCollector.CONFIG);
    }
}
