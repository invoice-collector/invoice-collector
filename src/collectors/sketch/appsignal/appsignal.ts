
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AppsignalCollector extends SketchCollector {

    static CONFIG = {
        id: "appsignal",
        name: "AppSignal",
        description: "i18n.collectors.appsignal.description",
        version: "0",
        website: "https://appsignal.com/sportograf/admin/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/64938.jpg",
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
        entryUrl: "https://appsignal.com/sportograf/admin/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AppsignalCollector.CONFIG);
    }
}
