
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DelmarvaPowerCollector extends SketchCollector {

    static CONFIG = {
        id: "delmarva_power",
        name: "Delmarva Power",
        description: "i18n.collectors.delmarva_power.description",
        version: "0",
        website: "https://secure.delmarva.com/MyAccount/MyBillUsage/pages/secure/MyBillUsage.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4700122.jpg",
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
        entryUrl: "https://secure.delmarva.com/MyAccount/MyBillUsage/pages/secure/MyBillUsage.aspx",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DelmarvaPowerCollector.CONFIG);
    }
}
