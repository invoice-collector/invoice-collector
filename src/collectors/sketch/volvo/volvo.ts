
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class VolvoCollector extends SketchCollector {

    static CONFIG = {
        id: "volvo",
        name: "VOLVO",
        description: "i18n.collectors.volvo.description",
        version: "0",
        website: "https://www.vcfs.partenaireslld.fr/portal/vlvnetpal/DEPENSES/Votre_Coffre_Fort/factures",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2729763.jpg",
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
        loginUrl: "https://www.vcfs.partenaireslld.fr/portal/vlvnetpal/DEPENSES/Votre_Coffre_Fort/factures",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(VolvoCollector.CONFIG);
    }
}
