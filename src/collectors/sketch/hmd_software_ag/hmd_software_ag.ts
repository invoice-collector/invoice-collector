
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HmdSoftwareAgCollector extends SketchCollector {

    static CONFIG = {
        id: "hmd_software_ag",
        name: "HMD Software AG",
        description: "i18n.collectors.hmd_software_ag.description",
        version: "0",
        website: "https://www.netarchiv.eu/doLogin.php?inline=0&lang=de&addresscode=&code=&demo=0",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1627028.jpg",
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
        entryUrl: "https://www.netarchiv.eu/doLogin.php?inline=0&lang=de&addresscode=&code=&demo=0",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HmdSoftwareAgCollector.CONFIG);
    }
}
