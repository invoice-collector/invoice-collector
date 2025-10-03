
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AppMySiteCollector extends SketchCollector {

    static CONFIG = {
        id: "app_my_site",
        name: "app my site",
        description: "i18n.collectors.app_my_site.description",
        version: "0",
        website: "https://app.appmysite.com/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1953774.jpg",
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
        entryUrl: "https://app.appmysite.com/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AppMySiteCollector.CONFIG);
    }
}
