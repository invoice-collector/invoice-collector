
import { SketchCollector } from '../../sketchCollector';

export class MemberpressCollector extends SketchCollector {

    static CONFIG = {
        id: "memberpress",
        name: "MemberPress",
        description: "i18n.collectors.memberpress.description",
        version: "0",
        website: "https://memberpress.com/account/?action=payments",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/167028.jpg",
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
        entryUrl: "https://memberpress.com/account/?action=payments",
    }

    constructor() {
        super(MemberpressCollector.CONFIG);
    }
}
