
import { SketchCollector } from '../../sketchCollector';

export class MachineseekerCollector extends SketchCollector {

    static CONFIG = {
        id: "machineseeker",
        name: "machineseeker",
        description: "i18n.collectors.machineseeker.description",
        version: "0",
        website: "https://www.machineseeker.fr/user/contract/invoice-list",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1863007.jpg",
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
        entryUrl: "https://www.machineseeker.fr/user/contract/invoice-list",
    }

    constructor() {
        super(MachineseekerCollector.CONFIG);
    }
}
