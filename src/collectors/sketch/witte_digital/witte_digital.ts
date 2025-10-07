
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WitteDigitalCollector extends SketchCollector {

    static CONFIG = {
        id: "witte_digital",
        name: "WITTE Digital",
        description: "i18n.collectors.witte_digital.description",
        version: "0",
        website: "https://portal.flinkey.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/411276.jpg",
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
        entryUrl: "https://portal.flinkey.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WitteDigitalCollector.CONFIG);
    }
}
