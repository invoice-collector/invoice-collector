
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FilhetAllardAndCieCollector extends SketchCollector {

    static CONFIG = {
        id: "filhet_allard_and_cie",
        name: "Filhet-Allard & Cie",
        description: "i18n.collectors.filhet_allard_and_cie.description",
        version: "0",
        website: "https://www.filhetallard.com/acces-client/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/106543.jpg",
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
        entryUrl: "https://www.filhetallard.com/acces-client/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FilhetAllardAndCieCollector.CONFIG);
    }
}
