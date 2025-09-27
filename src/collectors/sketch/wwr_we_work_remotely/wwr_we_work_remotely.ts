
import { SketchCollector } from '../../sketchCollector';

export class WwrWeWorkRemotelyCollector extends SketchCollector {

    static CONFIG = {
        id: "wwr_we_work_remotely",
        name: "WWR | We Work Remotely",
        description: "i18n.collectors.wwr_we_work_remotely.description",
        version: "0",
        website: "https://weworkremotely.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/823869.jpg",
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
    }

    constructor() {
        super(WwrWeWorkRemotelyCollector.CONFIG);
    }
}
