
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ImagifyCollector extends SketchCollector {

    static CONFIG = {
        id: "imagify",
        name: "Imagify",
        description: "i18n.collectors.imagify.description",
        version: "0",
        website: "https://app.imagify.io",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/19790.jpg",
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
        entryUrl: "https://app.imagify.io",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ImagifyCollector.CONFIG);
    }
}
