
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ReifenleaderCollector extends SketchCollector {

    static CONFIG = {
        id: "reifenleader",
        name: "Reifenleader",
        description: "i18n.collectors.reifenleader.description",
        version: "0",
        website: "https://www.reifenleader.at/profi/account/orders/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2519895.jpg",
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
        entryUrl: "https://www.reifenleader.at/profi/account/orders/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ReifenleaderCollector.CONFIG);
    }
}
