
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SousvidetoolsComCollector extends SketchCollector {

    static CONFIG = {
        id: "sousvidetools_com",
        name: "sousvidetools.com",
        description: "i18n.collectors.sousvidetools_com.description",
        version: "0",
        website: "https://www.sousvidetools.com/eu/sales/order/history/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2842269.jpg",
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
        entryUrl: "https://www.sousvidetools.com/eu/sales/order/history/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SousvidetoolsComCollector.CONFIG);
    }
}
