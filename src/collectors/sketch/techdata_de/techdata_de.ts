
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TechdataDeCollector extends SketchCollector {

    static CONFIG = {
        id: "techdata_de",
        name: "TechData.de",
        description: "i18n.collectors.techdata_de.description",
        version: "0",
        website: "https://intouch.techdata.com/default.aspx?Logout=&CssStyleSheet=UKMarketingPortal.css&Culture=de-DE",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/26973.jpg",
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
        entryUrl: "https://intouch.techdata.com/default.aspx?Logout=&CssStyleSheet=UKMarketingPortal.css&Culture=de-DE",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TechdataDeCollector.CONFIG);
    }
}
