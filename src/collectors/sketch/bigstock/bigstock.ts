
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BigstockCollector extends SketchCollector {

    static CONFIG = {
        id: "bigstock",
        name: "Bigstock",
        description: "i18n.collectors.bigstock.description",
        version: "0",
        website: "https://www.bigstockphoto.com/de/account/payments/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/81866.jpg",
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
        entryUrl: "https://www.bigstockphoto.com/de/account/payments/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BigstockCollector.CONFIG);
    }
}
