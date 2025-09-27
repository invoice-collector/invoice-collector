
import { SketchCollector } from '../../sketchCollector';

export class VmFarmsCollector extends SketchCollector {

    static CONFIG = {
        id: "vm_farms",
        name: "VM Farms",
        description: "i18n.collectors.vm_farms.description",
        version: "0",
        website: "https://vmfarms.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8574.jpg",
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
        entryUrl: "https://vmfarms.com/",
    }

    constructor() {
        super(VmFarmsCollector.CONFIG);
    }
}
