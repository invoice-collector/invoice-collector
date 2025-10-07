
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class XxxlutzMarktplatzCollector extends SketchCollector {

    static CONFIG = {
        id: "xxxlutz_marktplatz",
        name: "XXXLutz Marktplatz",
        description: "i18n.collectors.xxxlutz_marktplatz.description",
        version: "0",
        website: "https://marketplace.xxxlgroup.com/sellerpayment/shop/accounting-document/list?sort=issueDate%2CDESC&limit=25",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4447158.jpg",
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
        entryUrl: "https://marketplace.xxxlgroup.com/sellerpayment/shop/accounting-document/list?sort=issueDate%2CDESC&limit=25",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(XxxlutzMarktplatzCollector.CONFIG);
    }
}
