
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ReevCollector extends SketchCollector {

    static CONFIG = {
        id: "reev",
        name: "Reev",
        description: "i18n.collectors.reev.description",
        version: "0",
        website: "https://dashboard.reev.com/app/my-invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1364610.jpg",
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
        entryUrl: "https://dashboard.reev.com/app/my-invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ReevCollector.CONFIG);
    }
}
