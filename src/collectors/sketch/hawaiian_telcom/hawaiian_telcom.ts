
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HawaiianTelcomCollector extends SketchCollector {

    static CONFIG = {
        id: "hawaiian_telcom",
        name: "Hawaiian Telcom",
        description: "i18n.collectors.hawaiian_telcom.description",
        version: "0",
        website: "https://www.hawaiiantel.com/MyAccount/tabid/2089/Default.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/428607.jpg",
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
        entryUrl: "https://www.hawaiiantel.com/MyAccount/tabid/2089/Default.aspx",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HawaiianTelcomCollector.CONFIG);
    }
}
