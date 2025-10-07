
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WwrWeWorkRemotelyCollector extends SketchCollector {

    static CONFIG = {
        id: "wwr_we_work_remotely",
        name: "WWR | We Work Remotely",
        description: "i18n.collectors.wwr_we_work_remotely.description",
        version: "0",
        website: "https://weworkremotely.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/823869.jpg",
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
        entryUrl: "https://weworkremotely.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WwrWeWorkRemotelyCollector.CONFIG);
    }
}
