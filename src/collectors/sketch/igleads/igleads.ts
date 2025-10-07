
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class IgleadsCollector extends SketchCollector {

    static CONFIG = {
        id: "igleads",
        name: "Igleads",
        description: "i18n.collectors.igleads.description",
        version: "0",
        website: "https://igleads.io",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1876259.jpg",
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
        entryUrl: "https://igleads.io",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(IgleadsCollector.CONFIG);
    }
}
