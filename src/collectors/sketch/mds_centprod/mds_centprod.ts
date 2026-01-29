
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MdsCentprodCollector extends SketchCollector {

    static CONFIG = {
        id: "mds_centprod",
        name: "MDS Centprod",
        description: "i18n.collectors.mds_centprod.description",
        version: "0",
        website: "https://mds.centprod.com/situation_comptable/search.html?newfulldisplay=true&p=0",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2284739.jpg",
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
        loginUrl: "https://mds.centprod.com/situation_comptable/search.html?newfulldisplay=true&p=0",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(MdsCentprodCollector.CONFIG);
    }
}
