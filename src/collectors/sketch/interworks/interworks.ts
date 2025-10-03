
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class InterworksCollector extends SketchCollector {

    static CONFIG = {
        id: "interworks",
        name: "Interworks",
        description: "i18n.collectors.interworks.description",
        version: "0",
        website: "https://bss.adncloud.de/ModulePages/Invoices/Invoices.aspx#v=689",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2003686.jpg",
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
        entryUrl: "https://bss.adncloud.de/ModulePages/Invoices/Invoices.aspx#v=689",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(InterworksCollector.CONFIG);
    }
}
