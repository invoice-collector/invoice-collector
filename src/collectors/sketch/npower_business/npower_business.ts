
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class NpowerBusinessCollector extends SketchCollector {

    static CONFIG = {
        id: "npower_business",
        name: "Npower Business",
        description: "i18n.collectors.npower_business.description",
        version: "0",
        website: "https://www.npower.com/in_business/applications/BusinessOAM/SME.OAM/Logon.aspx#/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/395890.jpg",
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
        entryUrl: "https://www.npower.com/in_business/applications/BusinessOAM/SME.OAM/Logon.aspx#/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(NpowerBusinessCollector.CONFIG);
    }
}
