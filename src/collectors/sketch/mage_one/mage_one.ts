
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MageOneCollector extends SketchCollector {

    static CONFIG = {
        id: "mage_one",
        name: "Mage One",
        description: "i18n.collectors.mage_one.description",
        version: "0",
        website: "https://my.mage-one.com/invoices/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/759683.jpg",
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
        entryUrl: "https://my.mage-one.com/invoices/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MageOneCollector.CONFIG);
    }
}
