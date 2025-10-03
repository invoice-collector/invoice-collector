
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DcWaterCollector extends SketchCollector {

    static CONFIG = {
        id: "dc_water",
        name: "DC Water",
        description: "i18n.collectors.dc_water.description",
        version: "0",
        website: "https://www.mydcwater.com/DCWSSP/index.aspx?Logout=true",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2409464.jpg",
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
        entryUrl: "https://www.mydcwater.com/DCWSSP/index.aspx?Logout=true",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DcWaterCollector.CONFIG);
    }
}
