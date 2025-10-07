
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SelcoCollector extends SketchCollector {

    static CONFIG = {
        id: "selco",
        name: "Selco",
        description: "i18n.collectors.selco.description",
        version: "0",
        website: "https://www.selco.ie/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/408115.jpg",
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
        entryUrl: "https://www.selco.ie/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SelcoCollector.CONFIG);
    }
}
