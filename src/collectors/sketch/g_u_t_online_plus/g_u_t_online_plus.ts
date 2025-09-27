
import { SketchCollector } from '../../sketchCollector';

export class GUTOnlinePlusCollector extends SketchCollector {

    static CONFIG = {
        id: "g_u_t_online_plus",
        name: "G.U.T. Online Plus",
        description: "i18n.collectors.g_u_t_online_plus.description",
        version: "0",
        website: "https://www.gutonlineplus.de/#MainPage",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3200616.jpg",
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
        entryUrl: "https://www.gutonlineplus.de/#MainPage",
    }

    constructor() {
        super(GUTOnlinePlusCollector.CONFIG);
    }
}
