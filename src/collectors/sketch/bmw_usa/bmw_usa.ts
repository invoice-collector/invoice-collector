
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BmwUsaCollector extends SketchCollector {

    static CONFIG = {
        id: "bmw_usa",
        name: "BMW USA",
        description: "i18n.collectors.bmw_usa.description",
        version: "0",
        website: "https://www.bmwusa.com/secured/content/forms/login.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8612.jpg",
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
        entryUrl: "https://www.bmwusa.com/secured/content/forms/login.aspx",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BmwUsaCollector.CONFIG);
    }
}
