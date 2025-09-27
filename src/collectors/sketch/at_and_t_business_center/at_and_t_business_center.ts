
import { SketchCollector } from '../../sketchCollector';

export class AtAndTBusinessCenterCollector extends SketchCollector {

    static CONFIG = {
        id: "at_and_t_business_center",
        name: "AT&T Business Center",
        description: "i18n.collectors.at_and_t_business_center.description",
        version: "0",
        website: "https://www.att.com/ebiz/registration/home.jsp#/login?logout=true",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/88361.jpg",
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
        entryUrl: "https://www.att.com/ebiz/registration/home.jsp#/login?logout=true",
    }

    constructor() {
        super(AtAndTBusinessCenterCollector.CONFIG);
    }
}
