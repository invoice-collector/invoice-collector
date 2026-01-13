
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class IsoChemieCollector extends SketchCollector {

    static CONFIG = {
        id: "iso_chemie",
        name: "Iso-Chemie",
        description: "i18n.collectors.iso_chemie.description",
        version: "0",
        website: "https://portal.iso-chemie.eu/dokumente/auftragsdokumente",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1389902.jpg",
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
        loginUrl: "https://portal.iso-chemie.eu/dokumente/auftragsdokumente",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(IsoChemieCollector.CONFIG);
    }
}
