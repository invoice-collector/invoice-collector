
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DiamondInsuranceCollector extends SketchCollector {

    static CONFIG = {
        id: "diamond_insurance",
        name: "Diamond insurance",
        description: "i18n.collectors.diamond_insurance.description",
        version: "0",
        website: "https://myaccount.diamond.co.uk/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1119559.jpg",
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
        entryUrl: "https://myaccount.diamond.co.uk/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DiamondInsuranceCollector.CONFIG);
    }
}
