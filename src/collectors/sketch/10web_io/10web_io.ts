
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class _10webIoCollector extends SketchCollector {

    static CONFIG = {
        id: "10web_io",
        name: "10web.io",
        description: "i18n.collectors.10web_io.description",
        version: "0",
        website: "https://my.10web.io/workspace/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3203780.jpg",
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
        entryUrl: "https://my.10web.io/workspace/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(_10webIoCollector.CONFIG);
    }
}
