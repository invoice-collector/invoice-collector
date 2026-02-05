
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SynaxonEgisCollector extends SketchCollector {

    static CONFIG = {
        id: "synaxon_egis",
        name: "Synaxon - EGIS",
        description: "i18n.collectors.synaxon_egis.description",
        version: "0",
        website: "https://www.egis-online.de/cgi-bin/WebObjects.exe/EGIS.woa",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/392352.jpg",
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
        loginUrl: "https://www.egis-online.de/cgi-bin/WebObjects.exe/EGIS.woa",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(SynaxonEgisCollector.CONFIG);
    }
}
