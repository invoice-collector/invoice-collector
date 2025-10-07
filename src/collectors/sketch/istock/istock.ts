
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class IstockCollector extends SketchCollector {

    static CONFIG = {
        id: "istock",
        name: "iStock",
        description: "i18n.collectors.istock.description",
        version: "0",
        website: "https://www.istockphoto.com/de/account/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/325.jpg",
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
        entryUrl: "https://www.istockphoto.com/de/account/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(IstockCollector.CONFIG);
    }
}
