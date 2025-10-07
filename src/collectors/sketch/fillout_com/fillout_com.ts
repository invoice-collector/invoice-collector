
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FilloutComCollector extends SketchCollector {

    static CONFIG = {
        id: "fillout_com",
        name: "Fillout.com",
        description: "i18n.collectors.fillout_com.description",
        version: "0",
        website: "https://build.fillout.com/home/settings/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2148839.jpg",
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
        entryUrl: "https://build.fillout.com/home/settings/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FilloutComCollector.CONFIG);
    }
}
