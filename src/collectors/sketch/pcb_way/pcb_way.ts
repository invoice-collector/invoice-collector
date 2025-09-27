
import { SketchCollector } from '../../sketchCollector';

export class PcbWayCollector extends SketchCollector {

    static CONFIG = {
        id: "pcb_way",
        name: "PCB Way",
        description: "i18n.collectors.pcb_way.description",
        version: "0",
        website: "https://www.pcbway.com/member/login.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/49506.jpg",
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
        entryUrl: "https://www.pcbway.com/member/login.aspx",
    }

    constructor() {
        super(PcbWayCollector.CONFIG);
    }
}
