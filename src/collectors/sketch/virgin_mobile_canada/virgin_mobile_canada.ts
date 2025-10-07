
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class VirginMobileCanadaCollector extends SketchCollector {

    static CONFIG = {
        id: "virgin_mobile_canada",
        name: "Virgin Mobile Canada",
        description: "i18n.collectors.virgin_mobile_canada.description",
        version: "0",
        website: "https://www.virginmobile.ca/en/members-lounge/login.html?itcid=NAV:31",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8567.jpg",
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
        entryUrl: "https://www.virginmobile.ca/en/members-lounge/login.html?itcid=NAV:31",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VirginMobileCanadaCollector.CONFIG);
    }
}
