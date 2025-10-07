
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SynergyAuCollector extends SketchCollector {

    static CONFIG = {
        id: "synergy_au",
        name: "Synergy AU",
        description: "i18n.collectors.synergy_au.description",
        version: "0",
        website: "https://www.synergy.net.au/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/741145.jpg",
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
        entryUrl: "https://www.synergy.net.au/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SynergyAuCollector.CONFIG);
    }
}
