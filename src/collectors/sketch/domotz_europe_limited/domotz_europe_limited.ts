
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DomotzEuropeLimitedCollector extends SketchCollector {

    static CONFIG = {
        id: "domotz_europe_limited",
        name: "Domotz Europe Limited",
        description: "i18n.collectors.domotz_europe_limited.description",
        version: "0",
        website: "https://portal.domotz.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/136513.jpg",
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
        entryUrl: "https://portal.domotz.com/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DomotzEuropeLimitedCollector.CONFIG);
    }
}
