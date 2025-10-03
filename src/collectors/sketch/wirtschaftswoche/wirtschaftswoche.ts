
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WirtschaftswocheCollector extends SketchCollector {

    static CONFIG = {
        id: "wirtschaftswoche",
        name: "WirtschaftsWoche",
        description: "i18n.collectors.wirtschaftswoche.description",
        version: "0",
        website: "https://www.wiwo.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2003563.jpg",
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
        entryUrl: "https://www.wiwo.de",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WirtschaftswocheCollector.CONFIG);
    }
}
