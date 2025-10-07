
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MaxdaCollector extends SketchCollector {

    static CONFIG = {
        id: "maxda",
        name: "maxda",
        description: "i18n.collectors.maxda.description",
        version: "0",
        website: "https://pap.maxda.de/affiliates/panel.php#Payouts",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/156404.jpg",
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
        entryUrl: "https://pap.maxda.de/affiliates/panel.php#Payouts",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MaxdaCollector.CONFIG);
    }
}
