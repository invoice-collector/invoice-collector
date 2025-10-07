
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AtAndTMyatAndTCollector extends SketchCollector {

    static CONFIG = {
        id: "at_and_t_myat_and_t",
        name: "AT&T myAT&T",
        description: "i18n.collectors.at_and_t_myat_and_t.description",
        version: "0",
        website: "https://www.att.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/88538.jpg",
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
        entryUrl: "https://www.att.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AtAndTMyatAndTCollector.CONFIG);
    }
}
