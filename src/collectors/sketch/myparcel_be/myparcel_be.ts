
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MyparcelBeCollector extends SketchCollector {

    static CONFIG = {
        id: "myparcel_be",
        name: "MyParcel (.be)",
        description: "i18n.collectors.myparcel_be.description",
        version: "0",
        website: "https://backoffice.sendmyparcel.be/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778811.jpg",
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
        entryUrl: "https://backoffice.sendmyparcel.be/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MyparcelBeCollector.CONFIG);
    }
}
