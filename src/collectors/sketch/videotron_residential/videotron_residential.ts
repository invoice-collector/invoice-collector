
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class VideotronResidentialCollector extends SketchCollector {

    static CONFIG = {
        id: "videotron_residential",
        name: "Videotron - Residential",
        description: "i18n.collectors.videotron_residential.description",
        version: "0",
        website: "https://www.videotron.com/client/user-management/residentiel/secur/DisplayFactureForm.do?dispatch=displayFacture&appId=EC",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9610.jpg",
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
        entryUrl: "https://www.videotron.com/client/user-management/residentiel/secur/DisplayFactureForm.do?dispatch=displayFacture&appId=EC",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VideotronResidentialCollector.CONFIG);
    }
}
