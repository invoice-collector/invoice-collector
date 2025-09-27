
import { SketchCollector } from '../../sketchCollector';

export class MachDuDasCollector extends SketchCollector {

    static CONFIG = {
        id: "mach_du_das",
        name: "mach du das",
        description: "i18n.collectors.mach_du_das.description",
        version: "0",
        website: "https://www.machdudas.de/signin?redirectTo=%2Fjobs-neu",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/779126.jpg",
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
        entryUrl: "https://www.machdudas.de/signin?redirectTo=%2Fjobs-neu",
    }

    constructor() {
        super(MachDuDasCollector.CONFIG);
    }
}
