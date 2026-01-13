
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DhlParcelUkCollector extends SketchCollector {

    static CONFIG = {
        id: "dhl_parcel_uk",
        name: "DHL Parcel UK",
        description: "i18n.collectors.dhl_parcel_uk.description",
        version: "0",
        website: "https://documents.dhlparcel.co.uk/Login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3137504.jpg",
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
        loginUrl: "https://documents.dhlparcel.co.uk/Login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DhlParcelUkCollector.CONFIG);
    }
}
