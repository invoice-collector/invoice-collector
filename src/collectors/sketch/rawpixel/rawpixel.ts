
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class RawpixelCollector extends SketchCollector {

    static CONFIG = {
        id: "rawpixel",
        name: "Rawpixel",
        description: "i18n.collectors.rawpixel.description",
        version: "0",
        website: "https://www.rawpixel.com/steffi3/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1279590.jpg",
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
        entryUrl: "https://www.rawpixel.com/steffi3/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RawpixelCollector.CONFIG);
    }
}
