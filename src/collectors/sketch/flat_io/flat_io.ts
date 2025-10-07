
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FlatIoCollector extends SketchCollector {

    static CONFIG = {
        id: "flat_io",
        name: "flat.io",
        description: "i18n.collectors.flat_io.description",
        version: "0",
        website: "https://flat.io/settings/account/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/223928.jpg",
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
        entryUrl: "https://flat.io/settings/account/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FlatIoCollector.CONFIG);
    }
}
