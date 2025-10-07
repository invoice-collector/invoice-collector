
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DescriptCollector extends SketchCollector {

    static CONFIG = {
        id: "descript",
        name: "Descript",
        description: "i18n.collectors.descript.description",
        version: "0",
        website: "https://web.descript.com/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1333427.jpg",
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
        entryUrl: "https://web.descript.com/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DescriptCollector.CONFIG);
    }
}
