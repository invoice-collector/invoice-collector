
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MkbAfvalNlCollector extends SketchCollector {

    static CONFIG = {
        id: "mkb_afval_nl",
        name: "MKB-Afval.nl",
        description: "i18n.collectors.mkb_afval_nl.description",
        version: "0",
        website: "https://www.mkb-afval.nl/login/?ReturnUrl=%2fmijn-mkb%2f",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32564.jpg",
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
        entryUrl: "https://www.mkb-afval.nl/login/?ReturnUrl=%2fmijn-mkb%2f",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MkbAfvalNlCollector.CONFIG);
    }
}
