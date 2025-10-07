
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CommercialcafeSecurecafe3Collector extends SketchCollector {

    static CONFIG = {
        id: "commercialcafe_securecafe3",
        name: "CommercialCafe - SecureCafe3",
        description: "i18n.collectors.commercialcafe_securecafe3.description",
        version: "0",
        website: "https://www.securecafe3.com/newtenantportal/content2/login/?companyID=1816&propertyID=65162",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2385163.jpg",
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
        entryUrl: "https://www.securecafe3.com/newtenantportal/content2/login/?companyID=1816&propertyID=65162",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CommercialcafeSecurecafe3Collector.CONFIG);
    }
}
