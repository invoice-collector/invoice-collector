
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MacprovideoCollector extends SketchCollector {

    static CONFIG = {
        id: "macprovideo",
        name: "macProVideo",
        description: "i18n.collectors.macprovideo.description",
        version: "0",
        website: "https://www.macprovideo.com/profile",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/107059.jpg",
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
        entryUrl: "https://www.macprovideo.com/profile",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MacprovideoCollector.CONFIG);
    }
}
