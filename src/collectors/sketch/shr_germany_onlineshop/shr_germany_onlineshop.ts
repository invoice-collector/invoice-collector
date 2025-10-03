
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ShrGermanyOnlineshopCollector extends SketchCollector {

    static CONFIG = {
        id: "shr_germany_onlineshop",
        name: "SHR Germany Onlineshop",
        description: "i18n.collectors.shr_germany_onlineshop.description",
        version: "0",
        website: "https://shr-germany-onlineshop.de/anmeldung?back=my-account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1037331.jpg",
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
        entryUrl: "https://shr-germany-onlineshop.de/anmeldung?back=my-account",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ShrGermanyOnlineshopCollector.CONFIG);
    }
}
