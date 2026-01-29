
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class GrundlInstitutCollector extends SketchCollector {

    static CONFIG = {
        id: "grundl_institut",
        name: "Grundl Institut",
        description: "i18n.collectors.grundl_institut.description",
        version: "0",
        website: "https://lernwelt.grundl-institut.de/meine-bestellungen/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1617905.jpg",
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
        loginUrl: "https://lernwelt.grundl-institut.de/meine-bestellungen/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(GrundlInstitutCollector.CONFIG);
    }
}
