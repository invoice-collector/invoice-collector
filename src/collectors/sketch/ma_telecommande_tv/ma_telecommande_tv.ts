
import { SketchCollector } from '../../sketchCollector';

export class MaTelecommandeTvCollector extends SketchCollector {

    static CONFIG = {
        id: "ma_telecommande_tv",
        name: "Ma Telecommande TV",
        description: "i18n.collectors.ma_telecommande_tv.description",
        version: "0",
        website: "https://www.matelecommandetv.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/120863.jpg",
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
        entryUrl: "https://www.matelecommandetv.com/",
    }

    constructor() {
        super(MaTelecommandeTvCollector.CONFIG);
    }
}
