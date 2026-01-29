
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BbvRheinNeckarCollector extends SketchCollector {

    static CONFIG = {
        id: "bbv_rhein_neckar",
        name: "BBV Rhein Neckar",
        description: "i18n.collectors.bbv_rhein_neckar.description",
        version: "0",
        website: "https://bbvpfalz.co.crm-now.de/kundenportal/index.php?module=Documents&action=index&onlymine=true",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/148977.jpg",
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
        loginUrl: "https://bbvpfalz.co.crm-now.de/kundenportal/index.php?module=Documents&action=index&onlymine=true",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(BbvRheinNeckarCollector.CONFIG);
    }
}
