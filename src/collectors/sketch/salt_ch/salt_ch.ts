
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SaltChCollector extends SketchCollector {

    static CONFIG = {
        id: "salt_ch",
        name: "Salt.ch",
        description: "i18n.collectors.salt_ch.description",
        version: "0",
        website: "https://mba.salt.ch/financials/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/737735.jpg",
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
        entryUrl: "https://mba.salt.ch/financials/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SaltChCollector.CONFIG);
    }
}
